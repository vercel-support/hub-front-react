import React from "react";
import { numberToPrice } from "../../../utils/helpers";
import { CartTotalStyles, LabelSyles, ValueSyles } from "./styles";

const CartTotal = ({ subPrice }) => {
  return (
    <CartTotalStyles>
      <LabelSyles>Subtotal</LabelSyles>
      <ValueSyles>{numberToPrice(subPrice)}</ValueSyles>
    </CartTotalStyles>
  );
};

export default CartTotal;
