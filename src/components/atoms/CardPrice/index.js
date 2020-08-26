import React from "react";
import { numberToPrice } from "../../../utils/helpers";
import CardPriceStyled from "./styles";

const CardPrice = ({ price, specialPrice }) => (
  <CardPriceStyled specialPrice={!!specialPrice}>
    <span>
      {!specialPrice ? "a partir" : `de ${numberToPrice(specialPrice)} por`}
    </span>
    <p>{numberToPrice(price)}</p>
  </CardPriceStyled>
);

export default CardPrice;
