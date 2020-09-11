import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { store } from "../../../store";
import Link from "next/link";
import { ColumnShippingStyles } from "./styles";
import { Delivery, CartTotal, Pickup } from "../../atoms";
import { Shipping } from "../../molecules";
import { Paper, Button, Hidden } from "@material-ui/core";
import { ShoppingBasket, LocationOn } from "@material-ui/icons";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const ColumnShipping = ({ shipping, cartSubTotal, selectedShippingMethod, handleSelectedShipping, shippingType, end, setCep, pickupStore }) => {

  const [ errorMessage, setErrorMessage ] = useState(null);
  const router = useRouter();
  const { dispatch } = useContext(store);

  useEffect(() => {
  }, [handleSelectedShipping, shippingType]);

  const confirm = async() => {
    if(shippingType == "delivery" && !selectedShippingMethod) setErrorMessage("Selecione um método de entrega");
    if(shippingType == "delivery" && !shipping) setErrorMessage("Não há entrega disponível para esse cep");
    const cartId = localStorage.getItem("cartId");
    let goToCheckout = false;

    if(shippingType == "pickup"){
      localStorage.setItem("selected-shipping-method", "");
      localStorage.setItem("shipping-type", shippingType);
      localStorage.setItem("postalcode-delivery", end);
      goToCheckout = true;
    }
    if(shippingType == "delivery" && selectedShippingMethod && shipping){

      localStorage.setItem("selected-shipping-method", selectedShippingMethod);
      localStorage.setItem("shipping-type", shippingType);
      localStorage.setItem("postalcode-delivery", end);
      goToCheckout = true;
    }

    if(goToCheckout){
      dispatch({ type: "LOADING_DATA", payload: true });
      try{
        await axios.post(`${API_URL}/cart-shipping`, { 
          cartId, 
          shippingOptionSelected: selectedShippingMethod, 
          shippingType, 
          postalCodeDelivery: end 
        });
        router.push("/checkout", undefined, { shallow: true });
        dispatch({ type: "LOADING_DATA", payload: false });
      }
      catch(error){
        dispatch({ type: "LOADING_DATA", payload: false });
      }
    }
  }
  
  return (
    <ColumnShippingStyles>
      <Hidden only={["xs", "sm"]}>
        { shippingType === "delivery" ? 
        <Paper>
          <Delivery icon={<LocationOn />} end={end} setCep={setCep} />
          <Shipping shipping={shipping} handleSelectedShipping={handleSelectedShipping} />
        </Paper> :
        <Paper>
          <Pickup pickupStore={pickupStore}/>
        </Paper>
        }
      </Hidden>
      {cartSubTotal && <CartTotal subPrice={cartSubTotal || 0} />}
      { errorMessage }

      <Button color="red" onClick={confirm} variant="contained" size="large" fullWidth>
        Finalizar minha Compra
      </Button>

      <Link href="/" passHref>
        <a>adicionar mais produtos</a>
      </Link>
    </ColumnShippingStyles>
  );
};

export default ColumnShipping;
