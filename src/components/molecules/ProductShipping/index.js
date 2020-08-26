import React, { useContext } from "react";
import FlightIcon from "@material-ui/icons/Flight";
import StoreIcon from "@material-ui/icons/Store";
import { store } from "../../../store";
import ProductShippingStyled, {
  ShippingCardStyled,
  WithdrawStyled,
} from "./styles";

const addToCart = (product) => {
  let newProducts = {};
  const products = JSON.parse(localStorage.getItem("products"));

  if (products && products[product.sku]) {
    newProducts = {
      ...products,
      [product.sku]: {
        ...products[product.sku],
        qty: products[product.sku].qty + 1,
      },
    };
  } else {
    newProducts = {
      [product.sku]: { ...product, qty: 1 },
    };
  }

  localStorage.setItem("products", JSON.stringify(newProducts));
};

const Withdraw = ({ config = { stock: true }, myStore, product }) => (
  <WithdrawStyled {...config}>
    <p>
      <span className="stock">
        {config.stock ? "Retire hoje " : "Sem estoque "}
      </span>
      na loja
      <span className="store"> {myStore.name}</span>
    </p>
    <span className="change">(alterar loja)</span>
    {config.stock && (
      <span className="available">
        <StoreIcon /> pedido disponível em até 1 hora
      </span>
    )}
    <button onClick={() => addToCart(product)}>
      comprar e retirar na loja
    </button>
  </WithdrawStyled>
);

const ShippingCard = ({
  config = { stock: true },
  myStore,
  product,
  postalCode,
}) => (
  <ShippingCardStyled {...config}>
    <p>Entregar no CEP {postalCode ? postalCode : "_____-___"}</p>
    <span className="change">(alterar loja)</span>
    {postalCode && (
      <span className={config.stock ? "available" : "unavailable"}>
        {config.stock && <FlightIcon />}
        {config.stock
          ? "receba em até 4 horas"
          : "Essa loja não entrega no seu CEP"}
      </span>
    )}
    <button onClick={() => addToCart(product)}>
      comprar e receber em casa
    </button>
  </ShippingCardStyled>
);

const ProductShipping = ({ product }) => {
  const { state } = useContext(store);
  const { myStore, geo } = state;
  const { postalCode } = geo;

  return (
    <ProductShippingStyled>
      <Withdraw myStore={myStore} product={product} />
      <ShippingCard
        myStore={myStore}
        product={product}
        postalCode={postalCode}
      />
    </ProductShippingStyled>
  );
};

export default ProductShipping;
