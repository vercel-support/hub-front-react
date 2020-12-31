import React from "react";

const getEffectivePrice = (product) => {
  return parseFloat(product.specialPrice) ? product.specialPrice : product.price;
}

const makeProductSchema = (product) => {
  let offers = []
  let highPrice
  let lowPrice
  if(product.children && product.children.length > 0){
    product.children.map(child => {
      let price = getEffectivePrice(child);
      if(!highPrice) highPrice = price
      else if(price > highPrice) highPrice = price
      if(!lowPrice) lowPrice = price
      else if(price < lowPrice) lowPrice = price
      offers.push({
        "@type": "Offer",
        "priceCurrency": "R$",
        "price": price,
        "sku": child.sku,
        "gtin": child.sku,
        "url": `/${product.url}`
      })
    });
  }
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.geracaopet.com.br/media/catalog/product${product.image}`,
    "description": product.shortDescription || "",
    "sku": product.sku,
    "brand":{
       "@type": "Organization",
       "name": product.specifications.find(spec => spec.id == 81) ? product.specifications.find(spec => spec.id == 81).value : ""
    },
    "offers":{
       "@type":"AggregateOffer",
       "priceCurrency":"R$",
       "highPrice": highPrice,
       "lowPrice": lowPrice,
       "offerCount": product.children ? product.children.length : 0,
       "offers": offers
    }
 }
}

const ProductSchema = ({ content }) => {
  return (
    <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makeProductSchema(content)) }}
    />
  )
};

export default ProductSchema;