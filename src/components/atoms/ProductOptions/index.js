import React, { useState } from "react";
import ProductOptionsStyled from "./styles";

/*
sku: "7898049719266"
name: "Apoquel 3,6 mg"
variation: {code: "17", label: "3,6 mg"}
price: 183.5
specialPrice: 165.15
inPromotion: true
percentagePromotionDiscount: "10"
weight: 0.03
width: 0.2
height: 0.12
length: 0.12
pickupAvailable: false
quantityAvailableForPickup: 0

name: "kilo",
    price: "0",
    text: "15kg",
    value: "xxx",
    available: false,
*/

const ProductOptions = ({ options = [], change }) => {
  const [selected, setSelected] = useState(0);
  const opts = options.map((opt) => ({
    name: "teste",
    price: opt.price,
    specialPrice: opt.specialPrice,
    text: opt.variation.label,
    value: opt.specialPrice,
    percentagePromotionDiscount: opt.percentagePromotionDiscount,
  }));

  return (
    <ProductOptionsStyled>
      {opts.map((option, i) => (
        <li>
          <input
            type="radio"
            name={option.name}
            value={option.value}
            checked={i === selected}
            onClick={() => {
              change({
                price: option.price,
                specialPrice: option.specialPrice,
                discount: option.percentagePromotionDiscount,
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
              }).format(option.specialPrice)}
            </span>
          </div>
        </li>
      ))}
    </ProductOptionsStyled>
  );
};

export default ProductOptions;
