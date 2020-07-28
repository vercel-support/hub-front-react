import React from "react";
import { numberToPrice } from "../../../utils/helpers";
import CardPriceStyled from "./styles";

const CardPrice = ({ price, specialPrice }) => (
  <CardPriceStyled specialPrice={!isNaN(specialPrice)}>
    <span>
      {isNaN(specialPrice) ? "" : `de ${numberToPrice(specialPrice)} por`}
    </span>
    <p>{numberToPrice(price)}</p>
  </CardPriceStyled>
);

export default CardPrice;
