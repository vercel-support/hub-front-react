import React from "react";

import { ColumnShippingStyles } from "./styles";
import {
  Paper,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button
} from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";

const ColumnShipping = () => {
  const [value, setValue] = React.useState("expressa");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ColumnShippingStyles>
      <Paper>
        <span>icone</span> <p>Entregar no cep 18080-430</p>
        <p>(alterar cep)</p>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="expressa"
              control={<Radio />}
              label="Expressa em até 4 horas"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Econômica em até 7 dias úteis"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      <div>
        Total <span>R$ 99,00</span>
      </div>
      <Button variant="contained" size="large" fullWidth startIcon={<ShoppingBasket/>}> Finalizar Compra</Button>
      <div>adicionar mais produtos</div>
    </ColumnShippingStyles>
  );
};

export default ColumnShipping;
