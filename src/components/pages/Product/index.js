import React, { useContext, useState, useEffect } from "react";
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

import { productPageView } from '../../../../lib/ga';
import { ProductSchema } from '../../../../lib/schemas';

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

import { store } from "../../../store";

const Product = ({ content }) => {
  const {
    breadcrumbs,
    name,
    imageGallery,
    sku,
    type,
    description,
    specifications = [],
  } = content.data;
  const [product, setProduct] = useState(null);
  const brand = specifications.filter(
    (specification) => specification.name === "Marca"
  )[0]?.value;
  const { state } = useContext(store);
  const { myStore } = state;
  const [ children, setChildren ] = useState([])

  const fetchPrices = async() => {
    let url = myStore && myStore.id ?
      `${API_URL}/catalogs/products/prices?storeId=${myStore.id}&sku=${sku}` :
      `${API_URL}/catalogs/products/prices?sku=${sku}`;
    let response = await axios.get(url);
    if(response.data.data && response.data.status === 200 && response.data.data.length > 0){
      let new_children = response.data.data;
      setChildren(new_children);
      setProduct({
        name: new_children[0].name,
        sku: new_children[0].sku,
        price: new_children[0].price,
        specialPrice: new_children[0].specialPrice,
        discount: new_children[0].percentagePromotionDiscount
      })
    }
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  useEffect(() => {
    console.log(myStore);
    fetchPrices();
  }, [myStore]);
  
  useEffect(() => {
    productPageView(window.dataLayer.push, window.ga, {data: content.data, selectedProduct: product});
  }, [product]);

  const updatePrices = () => {
    fetchPrices();
  }

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
          { product ? 
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
              <ProductShipping product={product} updatePrices={updatePrices} />
            </ProductContentStyled> : null
          }
        </ProductContainerStyled>
      </ProductStyled>
      <ProductDescription description={description} />
      <ProductSchema content={content.data}/>
    </OneColumn>
  );
};

export default Product;
