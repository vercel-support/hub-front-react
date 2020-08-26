import React from "react";
import parse from "html-react-parser";
import ProductDescriptionStyled from "./styles";

const getDesc = (description) => {
  let desc;
  try {
    desc = parse(description);
  } catch (error) {
    desc = null;
  }
  return desc;
};

const ProductDescription = ({ description }) => (
  <ProductDescriptionStyled>{getDesc(description)}</ProductDescriptionStyled>
);

export default ProductDescription;
