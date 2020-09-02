import React, { useContext } from "react";
import { store } from "../../../store";
import { IconButton, FormControl, Select } from "@material-ui/core";
import { CardImage, CartPrice } from "../../atoms";
import { Paper } from "@material-ui/core";

import { ProductCartStyles } from "./styles";

const ProductCart = ({ product, allProducts }) => {
  const { dispatch } = useContext(store);
  const [state, setState] = React.useState({
    quantity: 1,
  });

  const setQuantity = () => {
    let qty = []
    for(let i = 1; i<product.quantity;i++) {
        qty.push(<option value={i}>{i}</option>)
    }
    return qty
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    const newPorducts = allProducts.map(item => item.sku !== product.sku ? item:{...item, quantity: event.target.value})

    dispatch({
      type: "SHIPPING_REQUEST",
      payload: {
        postalCode: "04650140",
        items: newPorducts,
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
            <CartPrice
              price={product.specialPrice}
              specialPrice={product.price}
            />
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
                {setQuantity()}
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
