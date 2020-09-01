import React, { useContext } from "react";
import { useRouter } from "next/router";
import { store } from "../../../store";
import FlightIcon from "@material-ui/icons/Flight";
import StoreIcon from "@material-ui/icons/Store";
import ProductShippingStyled, {
  ShippingCardStyled,
  WithdrawStyled,
} from "./styles";

const addToCart = (myStore, product, shippingType, dispatch) => {
  let newProducts = {};
  const products = JSON.parse(localStorage.getItem("products"));

  if (
    products &&
    !Object.keys(products).filter((sku) => products[sku].storeId === myStore.id)
      .length
  ) {
    dispatch({ type: "CLEAN_STORE" });
    return false;
  }

  if (products && products[product.sku]) {
    newProducts = {
      ...products,
      [product.sku]: {
        ...products[product.sku],
        qty: products[product.sku].qty + 1,
        storeId: myStore.id,
      },
    };
  } else if (products) {
    newProducts = {
      ...products,
      [product.sku]: { ...product, qty: 1, storeId: myStore.id },
    };
  } else {
    newProducts = {
      [product.sku]: { ...product, qty: 1, storeId: myStore.id },
    };
  }

  localStorage.setItem("products", JSON.stringify(newProducts));

  dispatch({
    type: "CART_REQUEST",
    payload: {
      sku: product.sku,
      storeId: myStore.id,
      shippingType,
    },
  });

  dispatch({
    type: "SHIPPING_REQUEST",
    payload: {
      postalCode: myStore.address.postalCode,
      items: [
        {
          sku: product.sku,
          name: product.name,
          quantity: 1,
          price: product.price,
          specialPrice: product.specialPrice,
        },
      ],
      storeId: myStore.id,
    },
  });

  return true;
};

const Withdraw = ({ config = { stock: true }, product }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const { myStore } = state;

  return (
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
      <button
        onClick={() => {
          let response = false;

          if (addToCart(myStore, product, "pickup", dispatch))
            setTimeout(() => router.push("/[...page]", "/cart"), 1000);
          else {
            response = confirm(
              "Você não pode ter produtos de lojas diferentes! Deseja limpar o carrinho?"
            );
            if (response) {
              localStorage.removeItem("products");
              addToCart(myStore, product, "pickup", dispatch);
              setTimeout(() => router.push("/[...page]", "/cart"), 1000);
            }
          }
        }}
      >
        comprar e retirar na loja
      </button>
    </WithdrawStyled>
  );
};

const ShippingCard = ({ config = { stock: true }, product }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const { myStore, geo } = state;

  return (
    <ShippingCardStyled {...config}>
      <p>Entregar no CEP {geo.postalCode ? geo.postalCode : "_____-___"}</p>
      <span className="change">(alterar loja)</span>
      {geo.postalCode && (
        <span className={config.stock ? "available" : "unavailable"}>
          {config.stock && <FlightIcon />}
          {config.stock
            ? "receba em até 4 horas"
            : "Essa loja não entrega no seu CEP"}
        </span>
      )}
      <button
        disabled={!geo.postalCode}
        onClick={() => {
          let response = false;

          if (addToCart(myStore, product, "delivery", dispatch))
            setTimeout(() => router.push("/[...page]", "/cart"), 1000);
          else {
            response = confirm(
              "Você não pode ter produtos de lojas diferentes! Deseja limpar o carrinho?"
            );
            if (response) {
              localStorage.removeItem("products");
              addToCart(myStore, product, "delivery", dispatch);
              setTimeout(() => router.push("/[...page]", "/cart"), 1000);
            }
          }
        }}
      >
        comprar e receber em casa
      </button>
    </ShippingCardStyled>
  );
};

const ProductShipping = ({ product }) => (
  <ProductShippingStyled>
    <Withdraw product={product} />
    <ShippingCard product={product} />
  </ProductShippingStyled>
);

export default ProductShipping;
