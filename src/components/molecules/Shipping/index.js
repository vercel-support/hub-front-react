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
              {shipping.expressDelivery.detailedShipping.map((item) => (
                <FormLabel>
                  <Radio value={"expressDelivery"} /> Expressa em até {item.time} horas
                  <span>
                    {item.price === 0 ? "Grátis" : numberToPrice(item.price)}
                  </span>
                </FormLabel>
              ))}
            </React.Fragment>
          )}
          {shipping && shipping.economicalDelivery.available && (
            <React.Fragment>
              {shipping.economicalDelivery.detailedShipping.map((item) => (
                <React.Fragment>
                  <FormLabel>
                    
                    <Radio value={"economicalDelivery"} /> Econômica em até {item.time} dias úteis
                    <span>
                      {item.price === 0 ? "Grátis" : numberToPrice(item.price)}
                    </span>
                  </FormLabel>
                </React.Fragment>
              ))}
            </React.Fragment>
          )}
        </RadioGroup>
      </FormControl> : null
      }
    </ShippingStyles>
  );
};

export default Shipping;
