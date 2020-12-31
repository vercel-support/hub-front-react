import React from "react";
import { numberToPrice } from "../../../utils/helpers";
import CartPriceStyled from "./styles";

const CartPrice = ({ price, specialPrice }) => (
  <CartPriceStyled specialPrice={!isNaN(specialPrice)}>
    <span>
      {isNaN(specialPrice) ? "" : `${numberToPrice(specialPrice)}`}
    </span>
    <p>{numberToPrice(price)}</p>
  </CartPriceStyled>
);

export default CartPrice;
