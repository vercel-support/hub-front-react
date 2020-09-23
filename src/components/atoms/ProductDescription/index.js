import React from "react";
import ProductDescriptionStyled from "./styles";

const ProductDescription = ({ description }) => (
  <ProductDescriptionStyled dangerouslySetInnerHTML={{__html: description}} />
);


 
export default ProductDescription;
