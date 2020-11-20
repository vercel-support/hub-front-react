import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { store } from "../../../store";
import { Title, Delivery, Pickup } from "../../atoms";
import { Shipping } from "../../molecules";
import { ColumnCart, ColumnShipping } from "../../organisms";
import { OneColumn } from "../../templates";
import { LocationOn } from "@material-ui/icons";
import { Grid, Hidden, Paper } from "@material-ui/core";

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

  const getPickupStore = async() => {
    const products = JSON.parse(localStorage.getItem("productList") || "[]");
    const pickupProduct = products.find(product => product.shippingType === "pickup");
    const storeId = pickupProduct ? pickupProduct.storeId : null
    if(storeId){
      try{
        let serviceResponse = await axios.get(`${API_URL}/logistic/store?storeId=${storeId}`);
        if(serviceResponse && serviceResponse.data && (serviceResponse.status === 200)){
          setPickupStore(serviceResponse.data.data);
        }
      }
      catch(error){
      }
    }
  }

  useEffect(() => {
    getPickupStore();
  }, [shippingType]);

  const calcShipping = async() => {
    try{
      dispatch({ type: "LOADING_DATA", payload: true });
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
      dispatch({ type: "LOADING_DATA", payload: false });
    }
    catch(error){ console.log(error.message); dispatch({ type: "LOADING_DATA", payload: false }); }
  }

  const updateCart = async(cartProducts) => {
    const cartId = localStorage.getItem("cartId");
    try{
      let serviceResponse = await axios.post(`${API_URL}/cart`, { products: cartProducts, cartId, clearFirst: true });
      if(serviceResponse && serviceResponse.data && (serviceResponse.status === 200 || serviceResponse.status === 201)){
        localStorage.setItem("productList", JSON.stringify(serviceResponse.data.products));
        localStorage.setItem("cartId", serviceResponse.data.cartId);
      }
    }
    catch(error){

    }
  };

  const fetchCart = async() => {
    const cartId = localStorage.getItem("cartId");
    try{
      let serviceResponse = await axios.post(`${API_URL}/cart`, { products: [], cartId, clearFirst: false });
      if(serviceResponse && serviceResponse.data && (serviceResponse.status === 200 || serviceResponse.status === 201)){
        setProducts(serviceResponse.data.products);  
        localStorage.setItem("productList", JSON.stringify(serviceResponse.data.products));
        localStorage.setItem("cartId", serviceResponse.data.cartId);
      }
    }
    catch(error){
      setProducts([]);
    }
  }

  const updateCartAndDispatch = async(products) => {
    if(products){
      await updateCart(products);
      dispatch({ type: "SET_CART_PAGE_PRODUCTS", payload: products });
    }
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

    updateCartAndDispatch(products);
  }, [products, cep]);

  useEffect(() => {
    fetchCart();      
    const userPostalCode = localStorage.getItem("postalcode-delivery");
    if(userPostalCode) setCep(userPostalCode);
    setShippingType(getShippingMethod());
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
          <Hidden only={['md', 'lg', 'xl']}>
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
