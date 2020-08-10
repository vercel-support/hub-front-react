import React from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";

import { numberToPrice } from "../../../utils/helpers";

import { ShippingStyles } from "./styles";

const Shipping = ({ shipping }) => {
  const [value, setValue] = React.useState();
  const [delivery] = React.useState(shipping);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(delivery, "delivery");

  return (
    <ShippingStyles>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="shipping"
          name="shipping"
          value={value}
          onChange={handleChange}
        >
          {shipping.expressDelivery.available && (
            <React.Fragment>
              {shipping.expressDelivery.detailedShipping.map((item) => (
                <FormLabel > <Radio value={`${item.shippingId}`}/> Expressa em até {item.time} horas <span>{item.price === 0 ? "Grátis": numberToPrice(item.price) }</span></FormLabel>
              ))}
            </React.Fragment>
          )}
          {shipping.economicalDelivery.available && (
            <React.Fragment>
              {shipping.economicalDelivery.detailedShipping.map((item) => (
                
                <React.Fragment>
                <FormLabel > <Radio value={`${item.shippingId}`}/> Econômica em até {item.time} dias úteis <span>{item.price === 0 ? "Grátis": numberToPrice(item.price) }</span></FormLabel>
                </React.Fragment>
              ))}
            </React.Fragment>
          )}
        </RadioGroup>
      </FormControl>
    </ShippingStyles>
  );
};

export default Shipping;
