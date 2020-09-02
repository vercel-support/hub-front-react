import React from "react";
import { ProductCart } from "../../molecules";

import { ColumnStyles } from "./styles";

const ColumnCart = ({ product }) => (
  <ColumnStyles>
    {product && product.map((item) => <ProductCart product={item} allProducts={product} />)}
  </ColumnStyles>
);

export default ColumnCart;
