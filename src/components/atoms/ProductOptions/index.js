import React, { useState } from "react";
import ProductOptionsStyled from "./styles";

const ProductOptions = ({ options = [], change }) => {
  const [selected, setSelected] = useState(0);
  const opts = options.map((opt) => ({
    sku: opt.sku,
    name: opt.name,
    price: opt.price,
    specialPrice: opt.specialPrice,
    text: opt.variation.label,
    value: opt.specialPrice,
    percentagePromotionDiscount: opt.percentagePromotionDiscount,
    pickupAvailable: opt.pickupAvailable,
    quantityAvailableForPickup: opt.quantityAvailableForPickup,
  }));

  return (
    <ProductOptionsStyled>
      {opts.map((option, i) => (
        <li>
          <input
            type="radio"
            name="product"
            value={option.value}
            checked={i === selected}
            onClick={() => {
              change({
                sku: option.sku,
                name: option.name,
                price: option.price,
                specialPrice: option.specialPrice,
                discount: option.percentagePromotionDiscount,
                pickupAvailable: option.pickupAvailable,
                quantityAvailableForPickup: option.quantityAvailableForPickup,
              });
              setSelected(i);
            }}
          />
          <div>
            <span>{option.text}</span>
            <span>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                option.specialPrice ? option.specialPrice : option.price
              )}
            </span>
          </div>
        </li>
      ))}
    </ProductOptionsStyled>
  );
};

export default ProductOptions;
