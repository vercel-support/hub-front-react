import React from "react";
import parse from "html-react-parser";
import ProductDescriptionStyled from "./styles";

const ProductDescription = ({ description }) => (
  <ProductDescriptionStyled>{parse(description)}</ProductDescriptionStyled>
);

export default ProductDescription;
