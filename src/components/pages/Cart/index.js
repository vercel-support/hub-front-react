import React, { useEffect, useState, useContext } from "react";
import { store } from "../../../store";
import { Title, Delivery } from "../../atoms";
import { Shipping } from "../../molecules";
import { ColumnCart, ColumnShipping } from "../../organisms";
import { OneColumn } from "../../templates";
import { LocationOn } from "@material-ui/icons";
import { Grid, Hidden, Paper } from "@material-ui/core";

const Cart = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const [cep, setCep] = useState();
  console.log(cep);

  useEffect(() => {
    if (state.storesCart) {
      setCep(state.storesCart.address.postalCode);
    }
  }, [state]);

  console.log(state, "state");

  return (
    <OneColumn content={content}>
      <Grid item xs={12} lg={12}>
        <Title>Meu carrinho</Title>
      </Grid>
      <Grid item xs={12} lg={12}>
        <span
          onClick={() =>
            dispatch({
              type: "CART_REQUEST",
              payload: {
                sku: "7898049719273",
                storeId: "5e8e1c6e43a61128433f0eed",
                shippingType: "pickup",
              },
            })
          }
        >
          incluir produto
        </span>

        <span
          onClick={() =>
            dispatch({
              type: "SHIPPING_REQUEST",
              payload: {
                postalCode: "02976-090",
                items: [
                  {
                    sku: "7898049719273",
                    name: "Apoquel 5,4 mg",
                    quantity: 1,
                    price: 189,
                    specialPrice: 170.1,
                  },
                ],
                storeId: "5e8e1c6e43a61128433f0eed",
              },
            })
          }
        >
          incluir endereço
        </span>
      </Grid>
      {state.productCard && (
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
            <ColumnShipping shipping={state.shippingCart.shippingOptions} end={cep} setCep={setCep} />
          </Grid>
        </React.Fragment>
      )}
    </OneColumn>
  );
};

export default Cart;
