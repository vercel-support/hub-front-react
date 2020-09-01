import React from "react";
import ProductPriceStyled from "./styles";

const ProductPrice = ({ price, specialPrice }) => (
  <ProductPriceStyled>
    {specialPrice && (
      <span className="old">
        {`de ${Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)} por`}
      </span>
    )}
    <span className="new">
      {Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(specialPrice ? specialPrice : price)}
    </span>
    <span className="installments">
      {`ou até 3x ${Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(specialPrice ? specialPrice / 3 : price / 3)} sem juros`}
    </span>
  </ProductPriceStyled>
);

export default ProductPrice;
