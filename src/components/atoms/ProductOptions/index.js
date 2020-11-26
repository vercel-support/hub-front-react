import React, { useState } from "react";
import { Radio, RadioGroup, FormLabel } from "@material-ui/core";
import ProductOptionsStyled from "./styles";

const ProductOptions = ({ options = [], change }) => {
  const [selected, setSelected] = useState(null);

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

  const handleChange = (event) => {
    setSelected(event.target.value);
    change(event.target.value);
  };

  return (
    <ProductOptionsStyled>
      <RadioGroup
        aria-label="product"
        name="product"
        value={selected}
        onChange={handleChange}
      >
        <div>Escolha uma opção:</div> 
        {opts.map((option, i) => {
          return (
            <React.Fragment>
              <div className="options">
                <FormLabel>
                  <Radio value={option.sku} />
                  <span className="qty">{option.text}</span>
                  {option.percentagePromotionDiscount ? <span className="blackfriday">PetFriday</span> : <span style={{marginLeft: "68px"}}></span> }
                  <span>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(
                      option.specialPrice ? option.specialPrice : option.price
                    )}
                  </span>
                </FormLabel>
              </div>
            </React.Fragment>
          );
        })}
      </RadioGroup>

      {/* // <li>
        //   <input
        //     type="radio"
        //     name="product"
        //     value={option.value}
        //     checked={i === selected}
        //     onClick={() => {
        //       change(option.sku);
        //       setSelected(i);
        //     }}
        //   />
        //   <div>
        //     <span>{option.text}</span>
        //     <span>
        //       {Intl.NumberFormat("pt-BR", {
        //         style: "currency",
        //         currency: "BRL",
        //       }).format(
        //         option.specialPrice ? option.specialPrice : option.price
        //       )}
        //     </span>
        //   </div>
        // </li> */}
    </ProductOptionsStyled>
  );
};

export default ProductOptions;
