import React from "react";
import StoreIcon from "@material-ui/icons/Store";
import PickupStyled from "./styles";

const Pickup = () => (
  <PickupStyled>
    <StoreIcon />
    <div>
      <strong>Retirar na loja</strong>
      <span>Saiba mais</span>
    </div>
  </PickupStyled>
);

export default Pickup;
