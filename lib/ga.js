const getEffectivePrice = (product) => {
  return parseFloat(product.specialPrice) ? product.specialPrice : product.price;
}

const getBrand = (product) => {
  let brand = product.specifications.find(spec => spec.id == 81);
  return brand ? brand.value : null
}

export const categoryPageView = (dataLayerPush, data) => {
  if(!dataLayerPush) return
  if(!data.products || data.products.length === 0) return
  try{
    const impressions = [];
    if(data.products)
      data.products.map(product => {
        let variant = "";
        if(product.variations && product.variations.length > 0)
          variant = product.variations[0] && product.variations[0].label ? product.variations[0].label : "";
        
        impressions.push({
          name: product.name,
          id: product.sku,
          price: getEffectivePrice(product),
          brand: product.brand && product.brand.label ? product.brand.label : "",
          category: '',
          variant,
          list: data.pageName,
          position: data.products.indexOf(product)
        })
      });
    dataLayerPush({
      event: "productImpression",
      ecommerce: {
        currencyCode: "BRL",
        impressions
      }
    });
  }
  catch(error){ console.log(`Erro datalayer: ${error.message}`); }
}

export const productPageView = (dataLayerPush, data) => {
  try{
    let variant = "";
    let child = data.data.children.find(ch => ch.sku == data.selectedProduct.sku);
    variant = child && child.variation ? child.variation.label || "" : "";

    let dataLayer = {
      event: "productDetails",
      ecommerce: {
        detail: {
          name: data.selectedProduct.name,
          id: data.selectedProduct.sku,
          price: getEffectivePrice(data.selectedProduct),
          brand: getBrand(data.data),
          category: data.data.defaultCategory ? data.data.defaultCategory.friendlyLabel || "" : "",
          variant
        }
      }
    };
    dataLayerPush(dataLayer);
  }
  catch(error){ console.log(`Erro datalayer: ${error.message}`); }
}

export const checkoutPageView = (step, dataLayerPush, data) => {
  if(!dataLayerPush) return
  try{
    const products = [];
    if(data)
      data.map(product => {
        products.push({
          name: product.name,
          id: product.sku,
          price: getEffectivePrice(product),
          brand: "",
          category: "",
          variant: "",
          quantity: product.quantity
        })
      });
    dataLayerPush({
      event: 'checkout',
      ecommerce: {
        checkout: {
          actionField: {step},
          products
       }
     }
    });
  }
  catch(error){ console.log(`Erro datalayer: ${error.message}`); }
}

export const addToCart = (dataLayerPush, data) => {
  if(!dataLayerPush) return
  try{
    dataLayerPush({
      event: "addToCart",
      eventLabel: data.name,
      ecommerce: {
        currencyCode: "BRL",
        add: {
          products: [{
            name: data.name,
            id: data.sku,
            price: getEffectivePrice(data),
            brand: "",
            category: "",
            quantity: 1
          }]
        }
      }
    });
  }
  catch(error){ console.log(`Erro datalayer: ${error.message}`); }
}

export const purchase = (dataLayerPush, data) => {

  if(!dataLayerPush || !data) return

  try{
    let products = [];

    if(data.order.items)
      data.order.items.map(product => {
        products.push({
          name: product.name || "",
          id: product.sku,
          price: getEffectivePrice(product),
          brand: "",
          category: "",
          variant: "",
          quantity: product.quantity,
          coupon: ""
        });
      });

    let dataLayer = {
      event: "conversionSuccess",
      ecommerce: {
        purchase: {
          actionField: {
            id: data.order.id,
            affiliation: "Website GeraçãoPet - Loja GeraçãoPet - GeraçãoPet",
            revenue: data.order.totalAmount,
            tax: 0,
            shipping: data.order.shippingAmount || 0,
            coupon: data.order.couponCode || ""
          },
          products
        }
      }
    };
    dataLayerPush(dataLayer);
  }
  catch(error){ console.log(`Erro datalayer: ${error.message}`); }
}

