import React, { useEffect, useState } from "react";
import axios from "axios";
import { ColumnCart, ColumnShipping } from "../../organisms";
import { OneColumn } from "../../templates";
import { Grid } from "@material-ui/core";

const Cart = ({ content }) => {
  const [product, setProduct] = useState();
  const url = "http://localhost:3000/api/V2/cart/productcart";

  useEffect(() => {
    let mon = true;

    const loadData = async () => {
      const response = await axios.get(url);
      if (mon) {
        setProduct(response.data);
      }
    };
    loadData();

    return () => {
      mon = false;
    };
  }, [url]);

  return (
    <OneColumn content={content}>
      <Grid item xs={12} lg={12}>
        Meu carrinho
      </Grid>

      <Grid item xs={12} lg={8}>
        <ColumnCart product={product} />
      </Grid>

      <Grid item xs={12} lg={4}>
        <ColumnShipping />
      </Grid>
    </OneColumn>
  );
};

export default Cart;
