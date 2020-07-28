import React from "react";
import AvailabilityStyled from "./styles";

const Availability = ({ available = false }) => (
  <AvailabilityStyled {...available}>
    <p>
      {available ? "produto em estoque" : "produto não disponível nessa loja"}
    </p>
  </AvailabilityStyled>
);

export default Availability;
