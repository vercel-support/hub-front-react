const getEffectivePrice = (product) => {
  return parseFloat(product.specialPrice) ? product.specialPrice : product.price;
}

const getBrand = (product) => {
  let brand = product.specifications.find(spec => spec.id == 81);
  return brand ? brand.value : null
}

export const homePageView = (ga) => {
  ga("send", "pageview", "/");
}

export const categoryPageView = (dataLayerPush, ga, data) => {
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
      ecommerce: {
        currencyCode: "BRL",
        impressions
      }
    });
    ga("send", "pageview", `/${data.url}`);
  }
  catch(error){ console.log(`Erro datalayer: ${error.message}`); }
}

export const productPageView = (dataLayerPush, ga, data) => {
  try{
    let variant = "";
    let child = data.data.children.find(ch => ch.sku == data.selectedProduct.sku);
    variant = child && child.variation ? child.variation.label || "" : "";

    let dataLayer = {
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
    ga("send", "pageview", `/${data.url}`);

  }
  catch(error){ console.log(`Erro datalayer: ${error.message}`); }
}

export const checkoutPageView = (step, dataLayerPush, ga, data) => {
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
     },
     eventCallback: function() {
        console.log('datalayer push');
     }
    });
    ga("send", "pageview", `/checkout`);
  }
  catch(error){ console.log(`Erro datalayer: ${error.message}`); }
}

export const addToCart = (dataLayerPush, data) => {
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

export const cartPageView = (ga) => {
  ga("send", "pageview", `/cart`);
}

export const purchase = (dataLayerPush, data) => {
  try{
    let products = [];

    if(data.order.items)
      data.order.products.map(product => {
        products.push({
          name: product.name,
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
      ecommerce: {
        purchase: {
          actionField: {
            id: data.order.id,
            affiliation: "Website GeraçãoPet - Loja GeraçãoPet - GeraçãoPet",
            revenue: data.order.totalAmount,
            tax: 0,
            shipping: data.order.shippingAmount,
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

export const successPageView = (ga) => {
  ga("send", "pageview", `/success`);
}


