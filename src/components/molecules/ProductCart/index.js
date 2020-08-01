import React from "react";
import { CardImage, CardPrice } from "../../atoms";
import { Paper } from "@material-ui/core";

import { ProductCartStyles } from "./styles";

const ProductCart = ({ product }) => {
  console.log(product);

  return (
    <Paper>
      <ProductCartStyles className="goods-item">
        <div className="goods-img">
          <CardImage image={product.image} />
        </div>
        <div className="goods-info">
          <p className="goods-title">
            {product.name}
          </p>
          <span className="des">R$ 35,00</span>
          <div className="goods-price">
          <CardPrice
            price={product.price}
            specialPrice="40"
          />
          </div>
          <span className="save">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
            />
          </span>
        </div>
      </ProductCartStyles>
    </Paper>
  );
};

export default ProductCart;
