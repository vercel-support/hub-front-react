import React from "react";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import FreeShippingStyled from "./styles";

const FreeShipping = () => (
  <FreeShippingStyled>
    <LocalShippingIcon />
    <div>
      <strong>Frete Grátis Brasil</strong>
      <span>Confira as Condições</span>
    </div>
  </FreeShippingStyled>
);

export default FreeShipping;
