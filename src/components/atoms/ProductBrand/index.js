import React from "react";
import ProductBrandStyled from "./styles";

const ProductBrand = ({ brand }) => (
  <ProductBrandStyled>{`marca: ${brand || ""}`}</ProductBrandStyled>
);

export default ProductBrand;
