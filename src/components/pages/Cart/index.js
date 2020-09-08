import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { store } from "../../../store";
import { Title, Delivery } from "../../atoms";
import { Shipping } from "../../molecules";
import { ColumnCart, ColumnShipping } from "../../organisms";
import { OneColumn } from "../../templates";
import { LocationOn } from "@material-ui/icons";
import { Grid, Hidden, Paper } from "@material-ui/core";

const Cart = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const { myStore, geo } = state;
  const [cep, setCep] = useState();
  const [products, setProducts] = useState(false);

  useEffect(() => {
    if(cep){
      dispatch({
        type: "SHIPPING_REQUEST",
        payload: {
          postalCode: cep,
          items: JSON.parse(localStorage.getItem("productList")),
          storeId: "5e8e1c6e43a61128433f0eed",
        },
      });
    }
  }, [products, cep]);

  useEffect(() => {
    if(geo && geo.postalCode) setCep(geo.postalCode);
    setProducts(JSON.parse(localStorage.getItem("productList")));
  }, []);

  console.log(state, "state");

  return (
    <OneColumn content={content}>
      <Grid item xs={12} lg={12}>
        <Title>Meu carrinho</Title>
      </Grid>

      {products && (
        <React.Fragment>
          <Hidden only="lg">
            <Grid item xs={12}>
              <Paper>
                <Delivery icon={<LocationOn />} end={cep} setCep={setCep} />
                <Shipping shipping={state.shippingCart.shippingOptions} />
              </Paper>
            </Grid>
          </Hidden>

          <Grid item xs={12} lg={8}>
            <ColumnCart product={state.productCard} />
          </Grid>

          <Grid item xs={12} lg={4}>
            <ColumnShipping
              shipping={state.shippingCart.shippingOptions}
              end={cep}
              setCep={setCep}
            />
          </Grid>
        </React.Fragment>
      )}
    </OneColumn>
  );
};

export default Cart;
