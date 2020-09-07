import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

  useEffect(() => {
  }, [handleSelectedShipping, shippingType]);

  const confirm = async() => {
    if(shippingType == "delivery" && !selectedShippingMethod) setErrorMessage("Selecione um método de entrega");
    if(shippingType == "pickup"){
      const cartId = localStorage.getItem("cartId");
      localStorage.setItem("selected-shipping-method", "");
      localStorage.setItem("shipping-type", shippingType);
      localStorage.setItem("cart-address", end);
      await axios.post(`${API_URL}/cart-shipping`, { 
        cartId, 
        shippingOptionSelected: selectedShippingMethod, 
        shippingType, 
        postalCodeDelivery: end
      });
      router.push("/checkout", undefined, { shallow: true });
    }
    if(shippingType == "delivery" && selectedShippingMethod){
      const cartId = localStorage.getItem("cartId");
      localStorage.setItem("selected-shipping-method", selectedShippingMethod);
      localStorage.setItem("shipping-type", shippingType);
      localStorage.setItem("cart-address", end);
      await axios.post(`${API_URL}/cart-shipping`, { 
        cartId, 
        shippingOptionSelected: selectedShippingMethod, 
        shippingType, 
        postalCodeDelivery: end 
      });
      router.push("/checkout", undefined, { shallow: true });
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
