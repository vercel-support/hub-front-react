import React, { useState } from "react";
import {
  ProductBrand,
  ProductDescription,
  ProductDiscount,
  ProductName,
  ProductOptions,
  ProductPrice,
  // ProductRating,
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
    specifications = [],
  } = content.data;
  const [product, setProduct] = useState({
    name: children[0].name,
    sku: children[0].sku,
    price: children[0].price,
    specialPrice: children[0].specialPrice,
    discount: children[0].percentagePromotionDiscount,
    pickupAvailable: children[0].pickupAvailable,
    quantityAvailableForPickup: children[0].quantityAvailableForPickup,
  });
  const brand = specifications.filter(
    (specification) => specification.name === "Marca"
  )[0]?.value;

  return (
    <OneColumn content={content}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <ProductStyled>
        <Gallery images={imageGallery} />
        <ProductContainerStyled>
          <ProductName name={name} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/*<ProductRating />*/}
            <ProductBrand brand={brand} />
          </div>
          <ProductContentStyled>
            <div>
              <ProductDiscount discount={product.discount} />
              <ProductPrice
                price={product.price}
                specialPrice={product.specialPrice}
              />
              {type.toLocaleLowerCase() === "configurable" && (
                <ProductOptions change={setProduct} options={children} />
              )}
            </div>
            <ProductShipping product={product} />
          </ProductContentStyled>
        </ProductContainerStyled>
      </ProductStyled>
      <ProductDescription description={description} />
    </OneColumn>
  );
};

export default Product;
