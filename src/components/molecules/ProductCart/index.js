import React, { useContext } from "react";
import { store } from "../../../store";
import { IconButton, FormControl, Select } from "@material-ui/core";
import { CardImage, CartPrice } from "../../atoms";
import { Paper } from "@material-ui/core";

import { ProductCartStyles } from "./styles";

const ProductCart = ({ product, handleProductChange }) => {
  const { dispatch } = useContext(store);
  const [state, setState] = React.useState({
    quantity: 1,
  });

  const setQuantity = () => {
    let qty = []
    for(let i = 1; i<=product.quantityAvailable;i++) {
        qty.push(<option value={i}>{i}</option>)
    }
    return qty
  }

  const handleChange = (event) => {
    handleProductChange({
      ...product,
      quantity: parseInt(event.target.value)
    });
  };

  const removeItem = (event) => {
    handleProductChange({
      ...product,
      quantity: 0
    });
  }

  return (
    <Paper>
      <ProductCartStyles className="goods-item">
        <div className="goods-img">
          <CardImage image={product.image} />
        </div>
        <div className="goods-info">
          <p className="goods-title">{product.name}</p>
          <div className="goods-price">
            { parseFloat(product.specialPrice) ?  
              <CartPrice
                price={product.specialPrice}
                specialPrice={product.price}
              /> :
              <CartPrice
                price={product.price}
              />
            }

          </div>
          <span className="save">
            <FormControl variant="outlined">
              <Select
                native
                value={product.quantity}
                onChange={handleChange}
                inputProps={{
                  name: "quantity",
                  id: "outlined-age-native-simple",
                }}
              >
                {setQuantity()}
              </Select>
            </FormControl>

            <a href="#" onClick={removeItem} title="Remover">
              <span>Remover</span>
            </a>
          </span>
        </div>
      </ProductCartStyles>
    </Paper>
  );
};

export default ProductCart;
