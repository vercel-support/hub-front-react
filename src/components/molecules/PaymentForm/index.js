import React, { useEffect, useState } from "react";
import { OneColumn } from "../../templates";
import { Grid } from "@material-ui/core";

import { PaymentFormStyles } from "./styles";

const PaymentForm = ({ content }) => {
  const [doSubmit, setDoSubmit] = useState(false);
  useEffect(() => {
    window.Mercadopago.setPublishableKey(
      "TEST-6ff57941-ef53-460f-b875-80eec81400ac"
    );
    window.Mercadopago.getIdentificationTypes();
    document.querySelector("#pay").addEventListener("submit", doPay);
  });
  const sdkResponseHandler = (status, response) => {
    if (status != 200 && status != 201) {
      alert("verify filled data");
    } else {
      const token = response.id;
      alert(`token = ${token}`);
      console.log(response);
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
  const submitForm = (value) => {
    console.log(value);
  };
  return (
    <PaymentFormStyles>
      <form action={submitForm} method="post" id="pay" name="pay">
        <fieldset>
          <Grid container spacing={3}>
            <Grid xs={6} sm={6}>
              <label for="description">Descrição</label>
              <input
                type="text"
                name="description"
                id="description"
                value="Ítem selecionado"
              />
            </Grid>
            <Grid xs={6} sm={6}>
              <label for="transaction_amount">Valor a pagar</label>
              <input
                type="text"
                name="transaction_amount"
                id="transaction_amount"
                value="300"
              />
            </Grid>
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
            <Grid xs={12} sm={12}>
              <label for="installments">Parcelas</label>
              <select
                id="installments"
                class="form-control"
                name="installments"
              ></select>
            </Grid>
            <Grid xs={12} sm={12}>
              <label for="docType">Tipo de documento</label>
              <select id="docType" data-checkout="docType"></select>
            </Grid>
            <Grid xs={12} sm={12}>
              <label for="docNumber">Número do documento</label>
              <input type="text" id="docNumber" data-checkout="docNumber" />
            </Grid>
            <Grid xs={12} sm={12}>
              <label for="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value="test@test.com"
              />
            </Grid>
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
