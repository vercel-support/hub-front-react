import React, { useEffect, useState, useContext } from "react";
import { store } from "../../../store";
import { Grid } from "@material-ui/core";
import { regex } from '../../../utils/regex';
import { PaymentFormStyles } from "./styles";

const PaymentForm = ({ total }) => {
  const { state, dispatch } = useContext(store);
  const [doSubmit, setDoSubmit] = useState(false);

  useEffect(() => {
    window.Mercadopago.setPublishableKey(
      "TEST-6ff57941-ef53-460f-b875-80eec81400ac"
    );
    window.Mercadopago.getIdentificationTypes();
    document.querySelector("#pay").addEventListener("submit", doPay);
  });
  
  const mask = "maskCpfCnpj";
  const onChange = null;

  const onInputChange = (e) => {
    const event = e;

    if (mask) {
      event.target.value = regex[mask](event.target.value);
    }

    if (onChange) onChange(event);
  };

  const sdkResponseHandler = (status, response) => {
    if (status != 200 && status != 201) {
      alert("verify filled data");
    } else {
      const token = response.id;
      alert(`token = ${token}`);
      console.log(response);
      dispatch({
        type: "PAYMENTS_REQUEST",
        paymentCard: {
          "payment": {
              "transactionAmount": total && total,
              "token": token,
              "description": 'COMPRA GERACAO PET', 
              "method": 'master'
          }
          ,
          "order": {
              "salesChannel": "geracaopet.com.br",
              "customer": {
                  "firstname": "Leo",
                  "lastname": "Accept",
                  "email": "tste@teste.com",
                  "telephone": "(15) 995122784",
                  "cpf": "177.529.640-77",
                  "address": {
                    "city": "Sorocaba",
                    "postalCode": "18030-005",
                    "region": "São Paulo",
                    "regionId": 508,
                    "countryId": "BR",
                    "uf": "SP",
                    "street": "Av. Comendador Pereira Inácio",
                    "number": "800",
                    "neighborhood": "Jd. Sandra",
                    "complement": "Ap 83 Bloco A",
                    "firstname": "Leo",
                    "lastname": "Okumura"
                }
              },
              "address": JSON.parse(localStorage.getItem("addressSelected")),
              "couponCode": "",
              "discount": 35,
              "items": state && state.shippingCart.items,
              "shippingType": "delivery",
              "shippings": [
                  {
                      "storeId": "5e8e1c6e43a61128433f0eed",
                      "id": "5e8e1c6e43a61128433f0ef5",
                      "price": 10,
                      "time": 5,
                      "timeUnits": "hours"
                  },
                  {
                      "storeId": "cd",
                      "shippingId": "11589028151",
                      "shippingMethodId": 4,
                      "price": 0,
                      "time": 2,
                      "timeUnits": "days"
                  }
              ]
          }
      },
      });
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
            let opt = document.createElement("option");
            opt.text = installment.recommended_message;
            opt.value = installment.installments;
            document.getElementById("installments").appendChild(opt);
          });
        } else {
          alert(`installments method info error: ${response}`);
        }
      }
    );
  };
  const setPaymentMethod = (status, response) => {
    if (status == 200) {
      console.log(response);
      let paymentMethodId = response[0].id;
      let element = document.getElementById("payment_method_id");
      element.value = paymentMethodId;
      getInstallments();
    } else {
      alert(`payment method info error: ${response}`);
    }
  };
  const onCardChange = (event) => {
    let cardnumber = event.target.value;
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
  const submitForm = () => {      
  };
  return (
    <PaymentFormStyles>
      <form action={submitForm} method="post" id="pay" name="pay">
        <fieldset>
          <Grid container spacing={3}>
            <input
              type="hidden"
              name="description"
              id="description"
              value="Ítem selecionado"
            />
            <input
              type="hidden"
              name="transaction_amount"
              id="transaction_amount"
              value={total && total}
            />
            <Grid xs={6} sm={6}>
              <label for="cardNumber">Número do cartão</label>
              <input
                type="text"
                id="cardNumber"
                data-checkout="cardNumber"
                onChange={onCardChange}
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete={"off"}
              />
            </Grid>
            <Grid xs={6} sm={6}>
              <label for="cardholderName">Nome e sobrenome</label>
              <input
                type="text"
                id="cardholderName"
                data-checkout="cardholderName"
              />
            </Grid>
            <Grid xs={4} sm={4}>
              <label for="cardExpirationMonth">Mês de vencimento</label>
              <input
                type="text"
                id="cardExpirationMonth"
                data-checkout="cardExpirationMonth"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete={"off"}
              />
            </Grid>
            <Grid xs={4} sm={4}>
              <label for="cardExpirationYear">Ano de vencimento</label>
              <input
                type="text"
                id="cardExpirationYear"
                data-checkout="cardExpirationYear"
                onselectstart="return false"
                onpaste="return false"
                onCopy="return false"
                onCut="return false"
                onDrag="return false"
                onDrop="return false"
                autocomplete={"off"}
              />
            </Grid>
            <Grid xs={4} sm={4}>
              <label for="securityCode">Código de segurança</label>
              <input
                type="text"
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
                type="text"
                id="docNumber"
                data-checkout="docNumber"
                placeholder="000.000.000-00"
              />
            </Grid>
            <input
              type="hidden"
              id="email"
              name="email"
              value="test@test.com"
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
