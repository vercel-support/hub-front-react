import React from "react";
import { Typography } from "@material-ui/core";
import { SuccessStyles } from "./styles";

const Success = () => {
  return (
    <SuccessStyles>
      <Typography variant="h5">Obrigado pelo seu pedido.</Typography>
      <Typography variant="subtitle1">
        O número do seu pedido é # 2001539. Enviamos seu pedido por e-mail a
        confirmação, e enviaremos uma atualização quando seu pedido tiver
        enviado.
      </Typography>
    </SuccessStyles>
  );
};

export default Success;
