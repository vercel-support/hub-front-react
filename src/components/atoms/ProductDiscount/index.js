import React from "react";
import ProductDiscountStyled from "./styles";

const ProductDiscount = ({ discount }) => (
  <ProductDiscountStyled>{`${discount}% OFF`}</ProductDiscountStyled>
);

export default ProductDiscount;
