import React from "react";
import { Typography } from "@material-ui/core";
import { SuccessStyles } from "./styles";

const Success = ({ paymentResponse }) => {
  if(paymentResponse)
    return (
      <SuccessStyles>
        <Typography variant="h5">{paymentResponse.message}</Typography>
        <Typography variant="subtitle1">
          O número do seu pedido é # {paymentResponse.data}. 
          Enviaremos atualizações sobre o status do seu pedido pelo email.
        </Typography>
      </SuccessStyles>
    );
  return null;
};

export default Success;
