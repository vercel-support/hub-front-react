import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { store } from "../../../store";
import FlightIcon from "@material-ui/icons/Flight";
import StoreIcon from "@material-ui/icons/Store";
import { Input } from "@material-ui/core";
import ProductShippingStyled, {
  ShippingCardStyled,
  WithdrawStyled,
} from "./styles";
import CircularProgress from '@material-ui/core/CircularProgress';

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

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

  const productList = JSON.parse(localStorage.getItem("productList") || "[]");
  productList.push({ ...product, quantity: 1 });
  localStorage.setItem("productList", JSON.stringify(productList));

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

const requestStockAvailability = async(postalCode, storeId, sku) => {
  try{
    let url = !postalCode ? 
              `${API_URL}/catalogs/products/delivery-stocks?storeId=${storeId}&sku=${sku}` :
              `${API_URL}/catalogs/products/delivery-stocks?postalCode=${postalCode}&storeId=${storeId}&sku=${sku}`;
    let response = await axios.get(url); 
    return response.data && response.data.status == 200 ? response.data : null;
  }
  catch (error) {
    return null;
  }
}

const Withdraw = ({ product }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const { myStore } = state;
  const [ available, setAvailable ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if(myStore && product){
      setLoading(true);
      requestStockAvailability(null, myStore.id, product.sku).then(options => {
        setLoading(false);
        if(options && options.data){
          setAvailable(options.data.pickupAvailable);
        }
      });
    }
  }, [myStore, product]);

  return (
    <WithdrawStyled available={available}>
      <p>
        <span className="stock">
          {available ? "Retire hoje " : "Sem estoque "}
        </span>
        na loja
        <span className="store"> {myStore.name}</span>
      </p>
      <span className="change">(alterar loja)</span>
      {available && (
        <span className="available">
          <StoreIcon /> pedido disponível em até 1 hora
        </span>
      )}
      { loading ? <CircularProgress /> :
      <button
        onClick={() => {
          let response = false;

          if (addToCart(myStore, product, "pickup", dispatch))
            setTimeout(
              () => router.push("/cart", undefined, { shallow: true }),
              1000
            );
          else {
            response = confirm(
              "Você não pode ter produtos de lojas diferentes! Deseja limpar o carrinho?"
            );
            if (response) {
              localStorage.removeItem("products");
              addToCart(myStore, product, "pickup", dispatch);
              setTimeout(
                () => router.push("/cart", undefined, { shallow: true }),
                1000
              );
            }
          }
        }}
      >
        comprar e retirar na loja
      </button>
      }
    </WithdrawStyled>
  );
};

const ShippingCard = ({ product }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const { myStore, geo } = state;
  const [ shippingPostalCode, setShippingPostalCode ] = useState(null);
  const [ deliveryOptionsAvailable, setDeliveryOptionsAvailable ] = useState({
    deliveryAvailable: false,
    expressDeliveryAvailable: false
  });
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if(myStore && product){
      setLoading(true);
      requestStockAvailability(shippingPostalCode, myStore.id, product.sku).then(options => {
        setLoading(false);
        if(options && options.data){
          console.log(options.data);
          setDeliveryOptionsAvailable(options.data);
        }
      });
    }

  }, [myStore, product, shippingPostalCode]);

  const validatePostalCode = (event) => {
    if(event){
      let value = event.target.value.replace(/\D/g, "");
      let validator = /^[0-9]{8}$/;
      if (validator.test(value)) {
        setShippingPostalCode(value);
      }
      else{
        setDeliveryOptionsAvailable({ deliveryAvailable: false, expressDeliveryAvailable: false });
        setShippingPostalCode(null);
      }
    }
  }

  return (
    <ShippingCardStyled available={ deliveryOptionsAvailable.deliveryAvailable || deliveryOptionsAvailable.expressDeliveryAvailable }>
      <p>Entregar no CEP {geo.postalCode ? geo.postalCode : 
        <Input
        style={{
          marginBottom: "20px",
        }}
        name="cep"
        onChange={validatePostalCode}
        placeholder="00000-000"
      />
      }</p>
      <span className="change">(alterar loja)</span>

      { deliveryOptionsAvailable.expressDeliveryAvailable ? 
        <span className={"available"}>
          {<FlightIcon />}
          {"receba em até 4 horas"}
        </span> : null }

      { shippingPostalCode && !deliveryOptionsAvailable.deliveryAvailable && !deliveryOptionsAvailable.expressDeliveryAvailable ?
            <span className={"unavailable"}>
            {"Indisponível para entrega em casa"}
          </span> : null}
      { loading ? <CircularProgress /> :
      <button
        disabled={!shippingPostalCode}
        onClick={() => {
          console.log('adicionando');
          dispatch({ type: "CHANGE_POSTALCODE", payload: shippingPostalCode });
          let response = false;

          if (addToCart(myStore, product, "delivery", dispatch))
            setTimeout(
              () => router.push("/cart", undefined, { shallow: true }),
              1000
            );
          else {
            response = confirm(
              "Você não pode ter produtos de lojas diferentes! Deseja limpar o carrinho?"
            );
            if (response) {
              localStorage.removeItem("products");
              addToCart(myStore, product, "delivery", dispatch);
              setTimeout(
                () => router.push("/cart", undefined, { shallow: true }),
                1000
              );
            }
          }
        }}
      >
        comprar e receber em casa
      </button>
      }
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
