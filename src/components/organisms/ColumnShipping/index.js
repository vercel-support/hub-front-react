import React from "react";
import Link from "next/link";
import { ColumnShippingStyles } from "./styles";
import { Delivery, CartTotal } from "../../atoms";
import { Shipping } from "../../molecules";
import { Paper, Button, Hidden } from "@material-ui/core";
import { ShoppingBasket, LocationOn } from "@material-ui/icons";

const ColumnShipping = ({ shipping, end, setCep }) => {

  return (
    <ColumnShippingStyles>
      <Hidden only={["xs", "sm"]}>
        <Paper>
          <Delivery icon={<LocationOn />} end={end} setCep={setCep} />
          <Shipping shipping={shipping} />
        </Paper>
      </Hidden>
      <CartTotal subPrice={shipping.economicalDelivery.total} />
      <Button variant="contained" size="large" fullWidth>
        Finalizar minha Compra
      </Button>
      <Link href={`/[...page]`} as="/category">
        <a>adicionar mais produtos</a>
      </Link>
    </ColumnShippingStyles>
  );
};

export default ColumnShipping;
