import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { store } from "../../../store";
import { Title, Delivery, Pickup } from "../../atoms";
import { Shipping } from "../../molecules";
import { ColumnCart, ColumnShipping } from "../../organisms";
import { OneColumn } from "../../templates";
import { LocationOn } from "@material-ui/icons";
import { Grid, Hidden, Paper } from "@material-ui/core";

import { cartPageView } from '../../../../lib/ga';

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const getShippingMethod = () => {
    const products = JSON.parse(localStorage.getItem("productList") || "[]");
    if(products.length > 0){
        return products[0].shippingType;
    }
    return null
};

const Cart = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const { myStore, geo } = state;
  const [ cep, setCep ] = useState();
  const [ products, setProducts ] = useState(false);
  const [ shippingType, setShippingType ] = useState(null);
  const [ pickupStore, setPickupStore ] = useState(null);
  const [ shippingOptions, setShippingOptions ] = useState();
  const [ selectedShippingMethod, setSelectedShippingMethod ] = useState(null);
  const [ cartSubTotalAmount, setCartSubTotalAmount ] = useState(null);

  const handleSelectedShipping = (method) => {
    setSelectedShippingMethod(method);
  }

  const calcShipping = async() => {
    try{
      const cartId = localStorage.getItem("cartId");
      if(cep && cartId && products && products.length > 0){
        const anyStoreInProducts = products.find(product => product.storeId !== "cd");
        const storeId = anyStoreInProducts ? anyStoreInProducts.storeId : "cd";
        let serviceResponse = await axios.post(`${API_URL}/logistic/shipping`, 
          { items: products, storeId, postalCode: cep, cartId }
        );
        if(serviceResponse && serviceResponse.data && (serviceResponse.status === 200)){
          setShippingOptions(serviceResponse.data.shippingOptions);
          localStorage.setItem("shipping-options", JSON.stringify(serviceResponse.data.shippingOptions));
        }
      }
    }
    catch(error){ console.log(error.message); }
  }

  useEffect(() => {
    if(shippingType == 'delivery' && products && products.length > 0 && cep){
      calcShipping();
    }

    if(products && products.length > 0){
      let cart_subtotal = 0;
      products.map(product => { cart_subtotal+= product.quantity * ( product.specialPrice || product.price ) });
      setCartSubTotalAmount(cart_subtotal);
    }

  }, [products, cep, myStore]);

  useEffect(() => {
    if(myStore && myStore.id !== "cd") setPickupStore(myStore);
  }, [myStore]);

  const updateCart = async() => {
    const cartId = localStorage.getItem("cartId");
    let savedProducts = JSON.parse(localStorage.getItem("productList") || "[]");
    let serviceResponse = await axios.post(`${API_URL}/cart`, { products: savedProducts, cartId, clearFirst: true });
    if(serviceResponse && serviceResponse.data && (serviceResponse.status === 200 || serviceResponse.status === 201)){
      localStorage.setItem("productList", JSON.stringify(serviceResponse.data.products));
      localStorage.setItem("cartId", serviceResponse.data.cartId);
      setProducts(serviceResponse.data.products);  
    }
  };

  useEffect(() => {
    updateCart();
    const userPostalCode = localStorage.getItem("postalcode-delivery");
    if(userPostalCode) setCep(userPostalCode);
    setShippingType(getShippingMethod());
    cartPageView(window.ga);
  }, []);

  const handleProductChange = async(product) => {
    const cartId = localStorage.getItem("cartId");
    let serviceResponse;
    if(product.quantity == 0){
      let new_list = products.filter(prod => prod.sku != product.sku);
      setProducts(new_list);
      serviceResponse = await axios.post(`${API_URL}/cart`, { products: new_list, cartId, clearFirst: true });
    }
    else{
      let updated_product = products.find(prod => prod.sku === product.sku && prod.storeId === product.storeId);
      updated_product.quantity = product.quantity;
      setProducts([...products]);
      serviceResponse = await axios.post(`${API_URL}/cart`, { products, cartId, clearFirst: true });
    }

    if(serviceResponse && serviceResponse.data && (serviceResponse.status === 200 || serviceResponse.status === 201)){
      localStorage.setItem("productList", JSON.stringify(serviceResponse.data.products));
      localStorage.setItem("cartId", serviceResponse.data.cartId);
    }
  }

  if(!products || products.length == 0)
    return (
      <OneColumn content={content}>
        <Grid item xs={12} lg={12}>
          <Title>Carrinho vazio</Title>
        </Grid>
      </OneColumn>
    );

  return (
    <OneColumn content={content}>
      <Grid item xs={12} lg={12}>
        <Title>Meu carrinho</Title>
      </Grid>

      {products && (
        <React.Fragment>
          <Hidden only="lg">
            <Grid item xs={12}>
                { shippingType === "delivery" ? 
                  <Paper>
                    <Delivery icon={<LocationOn />} end={cep} setCep={setCep} />
                    <Shipping shipping={shippingOptions} handleSelectedShipping={handleSelectedShipping}/> 
                  </Paper> :
                  <Paper>
                    <Pickup pickupStore={pickupStore}/>
                  </Paper>
                }
            </Grid>
          </Hidden>
          
          <Grid item xs={12} lg={8}>
            <ColumnCart 
              products={products} 
              handleProductChange={handleProductChange} 
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <ColumnShipping
              shipping={shippingOptions}
              end={cep}
              setCep={setCep}
              selectedShippingMethod={selectedShippingMethod}
              handleSelectedShipping={handleSelectedShipping}
              shippingType={shippingType}
              cartSubTotal={cartSubTotalAmount}
              pickupStore={pickupStore}
            />
          </Grid>
        </React.Fragment>
      )}
    </OneColumn>
  );
};

export default Cart;
