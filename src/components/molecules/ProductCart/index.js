import React, { useContext } from "react";
import { store } from "../../../store";
import { IconButton, FormControl, Select } from "@material-ui/core";
import { CardImage, CartPrice } from "../../atoms";
import { Paper } from "@material-ui/core";

import { ProductCartStyles } from "./styles";

const ProductCart = ({ product }) => {
  const [state, setState] = React.useState({
    quantity: "",
  });
  const { dispatch } = useContext(store);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });

    dispatch({
      type: "SHIPPING_REQUEST",
      payload: {
        postalCode: "04650140",
        items: [
          {
            sku: product.sku,
            quantity: event.target.value,
            price: 189,
            specialPrice: 170.1,
          },
        ],
        storeId: "5e8e1c6e43a61128433f0eed",
      },
    });
  };

  return (
    <Paper>
      <ProductCartStyles className="goods-item">
        <div className="goods-img">
          <CardImage image={product.image} />
        </div>
        <div className="goods-info">
          <p className="goods-title">{product.name}</p>
          <div className="goods-price">
            <CartPrice price={product.specialPrice} specialPrice={product.price} />
          </div>
          <span className="save">
            <FormControl variant="outlined">
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "quantity",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value={product.quantity}>
                  {product.quantity}
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </Select>
            </FormControl>

            <a href="#" title="Remover">
              <span>Remover</span>
            </a>
          </span>
        </div>
      </ProductCartStyles>
    </Paper>
  );
};

export default ProductCart;
