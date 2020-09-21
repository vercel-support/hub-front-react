import React from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

import { numberToPrice } from "../../../utils/helpers";

import { ShippingStyles } from "./styles";

const Shipping = ({ shipping, handleSelectedShipping }) => {
  const [value, setValue] = React.useState();

  React.useEffect(() => {
  }, [shipping]);

  const handleChange = (event) => {
    handleSelectedShipping(event.target.value);
    //setValue(event.target.value);
  };

  return (
    <ShippingStyles>
      { shipping ? 
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="shipping"
          name="shipping"
          value={value}
          onChange={handleChange}
        >
          {shipping && shipping.expressDelivery.available && (
            <React.Fragment>
              <FormLabel>
                <Radio value={"expressDelivery"} /> Expressa em até {shipping.expressDelivery.time} horas úteis
                <span>
                  {shipping.expressDelivery.price === 0 ? "Grátis" : numberToPrice(shipping.expressDelivery.price)}
                </span>
              </FormLabel>
            </React.Fragment>
          )}
          {shipping && shipping.economicalDelivery.available && (
            <React.Fragment>
              <React.Fragment>
                <FormLabel>
                  <Radio value={"economicalDelivery"} /> Econômica em até {shipping.economicalDelivery.time} dias úteis
                  <span>
                    {shipping.economicalDelivery.price === 0 ? "Grátis" : numberToPrice(shipping.economicalDelivery.price)}
                  </span>
                </FormLabel>
              </React.Fragment>
            </React.Fragment>
          )}
        </RadioGroup>
      </FormControl> : null
      }
    </ShippingStyles>
  );
};

export default Shipping;
