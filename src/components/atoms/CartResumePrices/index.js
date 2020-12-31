import React, { useEffect, useState } from "react";
import { ResumeValueStyeld, ResumeLabelStyeld } from "./styles";
import { numberToPrice } from "../../../utils/helpers";

import {
  Grid,
  Divider
} from "@material-ui/core";

const CartResumePrices = ({ cart }) => {
    const [ cartInfo, setCartInfo ] = useState([]);
    const [ cartTotal, setCartTotal ] = useState();
    useEffect(() => {

      if(cart){
        setCartInfo([
          {
            label: "Produtos",
            value: numberToPrice(cart.subtotal),
            fontSize: "1rem",
            fontColor: "rgba(0, 0, 0, 0.87)",
            fontWeight: "normal"
          },
          {
            label: "Frete",
            value: cart.shipping > 0 ? numberToPrice(cart.shipping) : "Grátis",
            fontSize: "1rem",
            fontColor: "rgba(0, 0, 0, 0.87)",
            fontWeight: "normal"
          },
          {
            label: "Desconto",
            value: cart.discount > 0 ? `-${numberToPrice(cart.discount)}` : null,
            fontSize: "1rem",
            fontColor: "#32CD32",
            fontWeight: "normal"
          },
        ]);

        setCartTotal({
          label: "Total",
          value: numberToPrice(cart.total),
          fontSize: "1.2rem",
          fontColor: "rgba(0, 0, 0, 0.87)",
          fontWeight: "bold"
        });
      }

    }, [cart]);

    return cartInfo.length > 0 && cartTotal ?
    (
      <Grid container direction="column">
        {cartInfo.map((info) => (
          info.value ?
          <Grid container direction="row">
            <Grid item xs={6}>
              <ResumeLabelStyeld
                fontSize={info.fontSize}
                fontColor={info.fontColor}
                fontWeight={info.fontWeight}
              >
                {info.label}
              </ResumeLabelStyeld>
            </Grid>
            <Grid item xs={6}>
              <ResumeValueStyeld
                fontSize={info.fontSize} 
                fontColor={info.fontColor}
                fontWeight={info.fontWeight}
              >
                {info.value}
              </ResumeValueStyeld>
            </Grid>
          </Grid> : null
        ))}

        <Divider/>

        <Grid container direction="row">
            <Grid item xs={6}>
              <ResumeLabelStyeld
                fontSize={cartTotal.fontSize} 
                fontColor={cartTotal.fontColor}
                fontWeight={cartTotal.fontWeight}
              >
                {cartTotal.label}
              </ResumeLabelStyeld>
            </Grid>
            <Grid item xs={6}>
              <ResumeValueStyeld
                fontSize={cartTotal.fontSize} 
                fontColor={cartTotal.fontColor}
                fontWeight={cartTotal.fontWeight}
              >
                {cartTotal.value}
              </ResumeValueStyeld>
            </Grid>
          </Grid>
      </Grid>
    )
  : null;
}

export default CartResumePrices;