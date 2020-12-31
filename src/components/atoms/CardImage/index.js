import React from "react";
import CardImageStyled from "./styles";

const CardImage = ({ image, name, size = 170 }) => (
  <CardImageStyled>
    <img
      src={`https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=${image}&size=${size}`}
      alt={name}
      title={name}
    />
  </CardImageStyled>
);

export default CardImage;
