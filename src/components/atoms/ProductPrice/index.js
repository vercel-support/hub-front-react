import React, { useEffect } from "react";
import ProductPriceStyled from "./styles";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


const ProductPrice = ({ price, specialPrice }) => {
  useEffect(() => {
  }, [price, specialPrice]);
  return (
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
          {`em até 3x ${Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(specialPrice ? specialPrice / 3 : price / 3)} sem juros`}
        </span>
        <span className="cashback"><MonetizationOnIcon style={{ color: green[500], verticalAlign: "middle" }} fontSize="small" />Ganhe <b>
        {`${Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(specialPrice ? specialPrice * 0.05 : price * 0.05)}`}</b> de crédito p/ próxima compra</span>
      </ProductPriceStyled>
  );
}


export default ProductPrice;
