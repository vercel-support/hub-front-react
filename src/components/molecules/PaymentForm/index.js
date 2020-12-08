import React, { useEffect, useState, useContext } from "react";
import { store } from "../../../store";
import { useRouter } from "next/router";
import { Grid, Divider } from "@material-ui/core";
import { regex } from '../../../utils/regex';
import { PaymentFormStyles, TitleStyles } from "./styles";
import { CardCoupon } from "../../atoms";

/*import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig; */
const API_URL = process.env.API_URL;
const MERCADOPAGO_KEY = process.env.MERCADOPAGO_KEY;
//const { API_URL, MERCADOPAGO_KEY } = publicRuntimeConfig;
import axios from "axios";

const PaymentForm = ({updateCart}) => {
  const router = useRouter();
  const { dispatch } = useContext(store);
  const [doSubmit, setDoSubmit] = useState(false);
  const [cartTotalAmount, setCartTotalAmount] = useState();
  const [customerEmail, setCustomerEmail] = useState();
  const [cashbackDiscount, setCashbackDiscount] = useState({
    discount: null, message: null
  });
  const [storeSource, setStoreSource] = useState();
  const [cartId, setCartId] = useState();

  const updateCartTotalAmount = async () => {
    const cartId = localStorage.getItem("cartId");
    if(cartId){
      setCartId(cartId);
      try{
        let serviceResponse = await axios.get(`${API_URL}/cart?cartId=${cartId}`);
        if (serviceResponse && serviceResponse.data) {
          setCartTotalAmount(serviceResponse.data.data.total);
        }
      }
      catch(error){
      }
    }
  };

  const updatePageCart = async() => {
    try{
      const cartId = localStorage.getItem("cartId");
      const customerToken = localStorage.getItem("customer-token");
      if(cartId && customerToken){
        let serviceResponse = await axios.post(`${API_URL}/cart/cashback/reward`, {
          cartId, customerToken
        });
        if(serviceResponse.status === 201){
          setCashbackDiscount(serviceResponse.data);
        }
      }
    }
    catch(error){

    }
  }

  useEffect(() => {
    updateCartTotalAmount();
  }, [updateCart]);

  useEffect(() => {
    updatePageCart();
    setCustomerEmail(localStorage.getItem("customer-email"));
  
    const mercadoPagoScript = document.createElement("script");
    mercadoPagoScript.src = "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js";
    mercadoPagoScript.async = false;
    document.body.appendChild(mercadoPagoScript);

    mercadoPagoScript.onload = () => {
      window.Mercadopago.setPublishableKey(MERCADOPAGO_KEY);
      window.Mercadopago.getIdentificationTypes();
      document.querySelector("#pay").addEventListener("submit", doPay);
    };
  }, []);

  const onChange = null;

  const onInputChange = (e) => {
    const event = e;
    const maskC = event.target.attributes.mask.nodeValue;

    if (maskC) {
      event.target.value = regex[maskC](event.target.value);
    }

    if (onChange) onChange(event);
  };

  const sdkResponseHandler = (status, response) => {
    if (status == 200 || status == 201) {
      const token = response.id;
      let payment_method_element = document.getElementById("payment_method_id");
      const cartId = localStorage.getItem("cartId");
      const customer = localStorage.getItem("customer-email");

      const i_el = document.getElementById("installments");
      const installments = parseInt(i_el.options[i_el.selectedIndex].value);

      const requestBody = {
        payment: {
          token,
          description: "COMPRA GERAÇÃO PET",
          method: payment_method_element.value,
          installments,
        },
        order: {
          salesChannel: "geracaopet.com.br",
          //storeSource: storeSource,
          customer,
          cartId,
        },
      };
      dispatch({ type: "LOADING_DATA", payload: true });
      try {
        axios
          .post(`${API_URL}/payments/card`, requestBody)
          .then((serviceResponse) => {
            if (serviceResponse && serviceResponse.data) {
              localStorage.setItem(
                "payment-response",
                JSON.stringify(serviceResponse.data)
              );
              localStorage.setItem("productList", "[]");
              setTimeout(() => {
                router.push("/success", undefined, { shallow: true });
                dispatch({ type: "LOADING_DATA", payload: false });
              }, 2000);
            }
          });
      } catch (error) {
        dispatch({ type: "LOADING_DATA", payload: false });
      }
    } else {
      console.log(response);
      alert("Verifique os dados do cartão");
    }
  };
  const doPay = (event) => {
    event.preventDefault();
    if (!doSubmit) {
      var $form = document.querySelector("#pay");
      window.Mercadopago.createToken($form, sdkResponseHandler);

      return false;
    }
  };
  const getInstallments = () => {
    window.Mercadopago.getInstallments(
      {
        payment_method_id: document.getElementById("payment_method_id").value,
        amount: parseFloat(document.getElementById("transaction_amount").value),
      },
      function (status, response) {
        if (status == 200) {
          document.getElementById("installments").options.length = 0;
          response[0].payer_costs.forEach((installment) => {
            if (parseInt(installment.installments) <= 3) {
              let opt = document.createElement("option");
              opt.text = installment.recommended_message;
              opt.value = installment.installments;
              document.getElementById("installments").appendChild(opt);
            }
          });
        } else {
          alert(`installments method info error: ${response}`);
        }
      }
    );
  };
  const setPaymentMethod = (status, response) => {
    if (status == 200) {
      let paymentMethodId = response[0].id;
      let element = document.getElementById("payment_method_id");
      element.value = paymentMethodId;
      getInstallments();
    } else {
      console.log(`payment method info error: ${response}`);
    }
  };
  const onCardChange = (event) => {
    let cardnumber = event.target.value;  
    const maskC = event.target.attributes.mask.nodeValue;

    if (maskC) {
      event.target.value = regex[maskC](event.target.value);
    }

    if (cardnumber.length >= 6) {
      let bin = cardnumber.substring(0, 6);
      window.Mercadopago.getPaymentMethod(
        {
          bin: bin,
        },
        setPaymentMethod
      );
    }
  };
  const submitForm = () => {};

  
  return (
    <PaymentFormStyles>

      <CardCoupon
        cashbackDiscount={cashbackDiscount}
        updateCart={updateCart}
      />

      <TitleStyles>
        <h2>Dados do cartão</h2>
        <Divider/>
      </TitleStyles>
      
      <form action={submitForm} method="post" id="pay" name="pay">
        <fieldset>
          <Grid container spacing={3}>
            <input
              type="hidden"
              name="description"
              id="description"
              value="COMPRA GERAÇÃO PET"
            />
            <input
              type="hidden"
              name="transaction_amount"
              id="transaction_amount"
              value={cartTotalAmount || 0}
            />
            <Grid xs={12} sm={6}>
              <label for="cardNumber">Número do cartão</label>
              <input
                type="text"
                id="cardNumber"
                data-checkout="cardNumber"
                onChange={onCardChange}
                mask="maskOnlyNumber"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete={"off"}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <label for="cardholderName">Nome Impresso no Cartão</label>
              <input
                type="text"
                id="cardholderName"
                data-checkout="cardholderName"
              />
            </Grid>
            <Grid xs={6} sm={4}>
              <label for="cardExpirationMonth">Mês de vencimento</label>
              <input
                type="text"
                id="cardExpirationMonth"
                onChange={onInputChange}
                mask="maskMes"
                data-checkout="cardExpirationMonth"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete={"off"}
                placeholder="mm"
              />
            </Grid>
            <Grid xs={6} sm={4}>
              <label for="cardExpirationYear">Ano de vencimento</label>
              <input
                type="text"
                onChange={onInputChange}
                mask="maskAno"
                id="cardExpirationYear"
                data-checkout="cardExpirationYear"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete={"off"}
                placeholder="aa"
              />
            </Grid>
            <Grid xs={12} sm={4}>
              <label for="securityCode">Código de segurança</label>
              <input
                type="text"
                onChange={onInputChange}
                mask="maskCardCvv"
                id="securityCode"
                data-checkout="securityCode"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete={"off"}
              />
            </Grid>
            <Grid xs={12} sm={4}>
              <label for="installments">Parcelas</label>
              <select
                id="installments"
                class="form-control"
                name="installments"
              ></select>
            </Grid>
            <Grid xs={12} sm={2}>
              <label for="docType">Tipo de documento</label>
              <select id="docType" data-checkout="docType"></select>
            </Grid>
            <Grid xs={12} sm={6}>
              <label for="docNumber">Número do documento</label>
              <input
                mask="maskOnlyNumber"
                type="text"
                id="docNumber"
                onChange={onInputChange}
                data-checkout="docNumber"
                placeholder="Apenas números"
              />
            </Grid>
            <input
              type="hidden"
              id="email"
              name="email"
              value={customerEmail}
            />
            <input
              type="hidden"
              name="payment_method_id"
              id="payment_method_id"
            />
            <input type="submit" value="Pagar" />
          </Grid>
        </fieldset>
      </form>
    </PaymentFormStyles>
  );
};
export default PaymentForm;
