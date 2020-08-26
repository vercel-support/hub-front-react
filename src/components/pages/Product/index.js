import React, { useState } from "react";
import {
  ProductBrand,
  ProductDescription,
  ProductDiscount,
  ProductName,
  ProductOptions,
  ProductPrice,
  ProductRating,
} from "../../atoms";
import { Breadcrumbs, Gallery, ProductShipping } from "../../molecules";
import { OneColumn } from "../../templates";
import ProductStyled, {
  ProductContainerStyled,
  ProductContentStyled,
} from "./styles";

const Product = ({ content }) => {
  const {
    breadcrumbs,
    name,
    imageGallery,
    children,
    sku,
    type,
    description,
  } = content.data;
  const [price, setPrice] = useState({
    price: children[0].price,
    specialPrice: children[0].specialPrice,
    discount: children[0].percentagePromotionDiscount,
  });

  return (
    <OneColumn content={content}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <ProductStyled>
        <Gallery images={imageGallery} />
        <ProductContainerStyled>
          <ProductName name={name} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ProductRating />
            <ProductBrand brand="Biofresh" />
          </div>
          <ProductContentStyled>
            <div>
              <ProductDiscount discount={price.discount} />
              <ProductPrice
                price={price.price}
                specialPrice={price.specialPrice}
                installments={`3x ${Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(price.specialPrice / 3)}`}
              />
              {type.toLocaleLowerCase() === "configurable" && (
                <ProductOptions change={setPrice} options={children} />
              )}
            </div>
            <ProductShipping product={{ name, sku }} />
          </ProductContentStyled>
          <ProductDescription description={description} />
        </ProductContainerStyled>
      </ProductStyled>
    </OneColumn>
  );
};

export default Product;
