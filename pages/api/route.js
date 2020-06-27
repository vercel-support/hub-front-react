export default (req, res) => {
  const url = req.query.url;

  const urls = {
    cart: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de carrinho",
        metaTitle: "GeraçãoPet - Página de Carrinho.",
        pageType: "cart",
      },
      target: "/carrinho",
    },
    carrinho: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de carrinho",
        metaTitle: "GeraçãoPet - Página de Carrinho.",
        pageType: "cart",
      },
      target: "/carrinho",
    },

    category: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de categoria",
        metaTitle: "GeraçãoPet - Página de categoria",
        pageType: "category",
      },
      target: "/categoria",
    },
    categoria: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de categoria",
        metaTitle: "GeraçãoPet - Página de categoria",
        pageType: "category",
      },
      target: "/categoria",
    },

    checkout: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de pagamento",
        metaTitle: "GeraçãoPet - Página de categoria",
        pageType: "checkout",
      },
      target: "/pagamento",
    },
    pagamento: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de pagamento",
        metaTitle: "GeraçãoPet - Página de pagamento",
        pageType: "checkout",
      },
      target: "/pagamento",
    },

    customer: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página do cliente",
        metaTitle: "GeraçãoPet - Área do Cliente",
        pageType: "customer",
      },
      target: "/customer",
    },

    product: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de produto",
        metaTitle: "GeraçãoPet - Página de Produto",
        pageType: "product",
      },
      target: "/produto",
    },
    produto: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de produto",
        metaTitle: "GeraçãoPet - Página de Produto",
        pageType: "product",
      },
      target: "/produto",
    },

    success: {
      status: 301,
      data: {
        metaDescription: "MetaDescription da página de sucesso",
        metaTitle: "GeraçãoPet - Página de Produto",
        pageType: "success",
      },
      target: "/success",
    },

    404: {
      status: 302,
      data: {
        metaDescription: "MetaDescription da página 404",
        metaTitle: "GeraçãoPet - Página não encontrada!",
        pageType: "notfound",
      },
      target: "/NotFound",
    },
  };

  const response = urls[url] ?? urls[404];

  res.statusCode = 200;
  res.json(response);
};
