import React from "react";
import ProductDiscountStyled from "./styles";

const ProductDiscount = ({ discount }) => {
  if (!parseInt(discount)) return null;

  return <ProductDiscountStyled>{`${discount}% OFF`}</ProductDiscountStyled>;

};

export default ProductDiscount;
