import React from "react";
import { ProductCart } from "../../molecules";

import { ColumnStyles } from "./styles";

const ColumnCart = ({ products, handleProductChange }) => (
  <ColumnStyles>
    {products && products.map((item) => 
      <ProductCart 
        product={item} 
        handleProductChange={handleProductChange} 
      />
    )}
  </ColumnStyles>
);

export default ColumnCart;
