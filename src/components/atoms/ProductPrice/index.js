import React from "react";
import ProductPriceStyled from "./styles";

const ProductPrice = ({ price, specialPrice, installments }) => (
  <ProductPriceStyled>
    <span className="old">
      de
      {Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price)}{" "}
      por
    </span>
    <span className="new">
      {Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(specialPrice)}
    </span>
    <span className="installments">ou até {installments} sem juros</span>
  </ProductPriceStyled>
);

export default ProductPrice;
