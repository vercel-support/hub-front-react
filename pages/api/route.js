export default (req, res) => {
  const url = req.query.url;

  const urls = {
    cart: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de Carrinho.",
      },
      pageType: "Cart",
      target: "/carrinho",
    },
    carrinho: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de Carrinho.",
      },
      pageType: "Cart",
      target: "/carrinho",
    },

    category: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de categoria",
      },
      pageType: "Category",
      target: "/categoria",
    },
    categoria: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de categoria",
      },
      pageType: "Category",
      target: "/categoria",
    },

    checkout: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de categoria",
      },
      pageType: "Checkout",
      target: "/pagamento",
    },
    pagamento: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de pagamento",
      },
      pageType: "Checkout",
      target: "/pagamento",
    },

    customer: {
      code: 301,
      data: {
        title: "GeraçãoPet - Área do Cliente",
      },
      pageType: "Customer",
      target: "/customer",
    },

    product: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de Produto",
      },
      pageType: "Product",
      target: "/produto",
    },
    produto: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de Produto",
      },
      pageType: "Product",
      target: "/produto",
    },

    success: {
      code: 301,
      data: {
        title: "GeraçãoPet - Página de Produto",
      },
      pageType: "Success",
      target: "/success",
    },

    404: {
      code: 302,
      data: {
        title: "GeraçãoPet - Página não encontrada!",
      },
      pageType: "NotFound",
      target: "/NotFound",
    },
  };

  const response = urls[url] ?? urls[404];

  res.statusCode = 200;
  res.json(response);
};
