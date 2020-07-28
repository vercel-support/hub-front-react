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
        pageType: "category",
        pageName: "Royal Canin",
        url: "marcas/royal-canin",
        image: null,
        metaTitle:
          "Royal Canin para Cachorros e Gatos pelo Menor Preço | Geração Pet",
        metaDescription:
          "Encontre Ração Royal Canin para cães e gatos em oferta pelo menor preço na Geração Pet - Pet Shop Online. Clique e confira, entrega garantida para todo Brasil",
        breadcrumbs: [
          {
            id: 179,
            name: "Principais Marcas",
            url: "marcas",
            level: 1,
          },
          {
            id: 180,
            name: "Royal Canin",
            url: "marcas/royal-canin",
            level: 2,
          },
        ],
        filtersAvailable: [
          {
            id: 81,
            type: "select",
            code: "manufacturer",
            values: [
              {
                id: "317",
                label: "Royal Canin",
              },
            ],
            frontEndLabel: "Marca",
          },
          {
            id: 281,
            type: "select",
            code: "peso",
            values: [
              {
                id: "133",
                label: "85 g",
              },
            ],
            frontEndLabel: "peso",
          },
          {
            id: 283,
            type: "multiselect",
            code: "fase_da_vida",
            values: [
              {
                id: "402",
                label: "Filhote",
              },
              {
                id: "403",
                label: "Adulto",
              },
              {
                id: "404",
                label: "Sênior",
              },
            ],
            frontEndLabel: "Fase da Vida",
          },
          {
            id: 284,
            type: "multiselect",
            code: "porte",
            values: [
              {
                id: "405",
                label: "Pequeno",
              },
              {
                id: "406",
                label: "Médio",
              },
              {
                id: "407",
                label: "Grande",
              },
              {
                id: "408",
                label: "Gigante",
              },
              {
                id: "409",
                label: "Todos",
              },
            ],
            frontEndLabel: "Porte",
          },
          {
            id: 285,
            type: "multiselect",
            code: "indicacao",
            values: [
              {
                id: "410",
                label: "Cão",
              },
              {
                id: "411",
                label: "Gato",
              },
            ],
            frontEndLabel: "Indicação",
          },
          {
            id: 287,
            type: "multiselect",
            code: "indicacao_veterinaria",
            values: [
              {
                id: "424",
                label: "Alérgico",
              },
              {
                id: "425",
                label: "Cardíaco",
              },
              {
                id: "426",
                label: "Diabético",
              },
              {
                id: "427",
                label: "Gastro Intestinal",
              },
              {
                id: "428",
                label: "Obesidade",
              },
              {
                id: "429",
                label: "Renal",
              },
              {
                id: "430",
                label: "Urinário",
              },
              {
                id: "431",
                label: "Hepático",
              },
            ],
            frontEndLabel: "Indicação Veterinária",
          },
          {
            id: 288,
            type: "multiselect",
            code: "dieta_especial",
            values: [
              {
                id: "432",
                label: "Castrado",
              },
              {
                id: "433",
                label: "Light",
              },
            ],
            frontEndLabel: "Dieta Especial",
          },
          {
            id: 293,
            type: "multiselect",
            code: "tipo_racao",
            values: [
              {
                id: "508",
                label: "Seca",
              },
              {
                id: "509",
                label: "Úmida",
              },
              {
                id: "510",
                label: "Medicamentosa",
              },
            ],
            frontEndLabel: "Tipo de Ração",
          },
          {
            id: 295,
            type: "multiselect",
            code: "classificacao_racao",
            values: [
              {
                id: "514",
                label: "Super Premium",
              },
            ],
            frontEndLabel: "Classificação da Ração",
          },
          {
            id: 297,
            type: "multiselect",
            code: "promocao",
            values: [
              {
                id: "522",
                label: "Saldao",
              },
            ],
            frontEndLabel: "Promocao",
          },
        ],
        sortOptions: [
          {
            id: 0,
            label: "Mais relevantes",
            code: "relevance",
            query: {
              "children.storages.quantity": -1,
            },
          },
          {
            id: 1,
            label: "Nome do produto",
            code: "product_name",
            query: {
              name: 1,
            },
          },
          {
            id: 2,
            label: "Lançamentos",
            code: "newest",
            query: {
              createdAt: -1,
            },
          },
          {
            id: 3,
            label: "Maior preço",
            code: "highest_price",
            query: {
              maximumPrice: -1,
            },
          },
          {
            id: 4,
            label: "Menor preço",
            code: "lowest_price",
            query: {
              minimumPrice: 1,
            },
          },
          {
            id: 5,
            label: "Mais vendidos",
            code: "bestselling",
            query: {
              salesCount: -1,
            },
          },
        ],
        sortedBy: "Nome do produto",
        currentPage: 0,
        productsPerPage: 16,
        products: [
          {
            name: "Ração Royal Canin Medium Adulto",
            sku: "1002",
            type: "configurable",
            url: "racao-royal-canin-medium-adulto",
            price: 233.9,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_medium_adulto.jpg",
            imageGallery: [
              {
                id: 29872,
                media_type: "image",
                label: "Ração Royal Canin Medium Adulto",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_medium_adulto.jpg",
              },
              {
                id: 37214,
                media_type: "image",
                label: "Ração Royal Canin Medium Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/r/a/ra_o-royal-canin-medium-adulto-2_1.jpg",
              },
              {
                id: 37215,
                media_type: "image",
                label: "Ração Royal Canin Medium Adulto",
                position: 3,
                disabled: false,
                types: [],
                file: "/r/a/ra_o-royal-canin-medium-adulto_1.jpg",
              },
              {
                id: 34134,
                media_type: "image",
                label: "Ração Royal Canin Medium Adulto",
                position: 4,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-medium-adulto_1.jpg",
              },
              {
                id: 34135,
                media_type: "image",
                label: "Ração Royal Canin Medium Adulto",
                position: 5,
                disabled: false,
                types: [],
                file: "/n/i/niveis-medium-adulto_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "118",
                label: "15 kg",
              },
              {
                code: "98",
                label: "2,5 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Mini Adulto",
            sku: "1020",
            type: "configurable",
            url: "racao-royal-canin-mini-adulto",
            price: 172.89,
            specialPrice: "155.60",
            image: "/r/a/racao_royal_canin_mini_adulto.jpg",
            imageGallery: [
              {
                id: 29876,
                media_type: "image",
                label: "Ração Royal Canin Mini Adult",
                position: 0,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_mini_adulto.jpg",
              },
              {
                id: 37224,
                media_type: "image",
                label: "Ração Royal Canin Mini Adulto",
                position: 1,
                disabled: false,
                types: [],
                file: "/r/a/ra_o-royal-canin-mini-adulto-2.jpg",
              },
              {
                id: 37225,
                media_type: "image",
                label: "Ração Royal Canin Mini Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/r/a/ra_o-royal-canin-mini-adulto.jpg",
              },
              {
                id: 34142,
                media_type: "image",
                label: "Ração Royal Canin Mini Adulto",
                position: 3,
                disabled: false,
                types: [],
                file: "/n/i/niveis-mini-adulto_1.jpg",
              },
              {
                id: 34143,
                media_type: "image",
                label: "Ração Royal Canin Mini Adulto",
                position: 4,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-mini-adulto_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "93",
                label: "1 kg",
              },
              {
                code: "101",
                label: "3 kg",
              },
              {
                code: "110",
                label: "7,5 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Mini Indoor Adulto",
            sku: "1023",
            type: "configurable",
            url: "racao-royal-canin-mini-indoor-adulto",
            price: 48.9,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_mini_indoor_adulto.jpg",
            imageGallery: [
              {
                id: 29885,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto",
                position: 0,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_mini_indoor_adulto.jpg",
              },
              {
                id: 37248,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto",
                position: 1,
                disabled: false,
                types: [],
                file: "/r/a/ra_o-royal-canin-mini-indoor-adulto-2_4.jpg",
              },
              {
                id: 37249,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/r/a/ra_o-royal-canin-mini-indoor-adulto_4.jpg",
              },
              {
                id: 34155,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto",
                position: 3,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-mini-indoor-adulto_1.jpg",
              },
              {
                id: 34154,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto",
                position: 4,
                disabled: false,
                types: [],
                file: "/n/i/niveis-mini-indoor-adulto_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "93",
                label: "1 kg",
              },
              {
                code: "110",
                label: "7,5 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Mini Indoor Adulto 8+",
            sku: "1024",
            type: "configurable",
            url: "racao-royal-canin-mini-indoor-adulto-8",
            price: 48.37,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_mini_indoor_adulto_8.jpg",
            imageGallery: [
              {
                id: 29889,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto 8+",
                position: 0,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_mini_indoor_adulto_8.jpg",
              },
              {
                id: 37250,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto 8+",
                position: 1,
                disabled: false,
                types: [],
                file: "/r/a/ra_o-royal-canin-mini-indoor-adulto-8_-2.jpg",
              },
              {
                id: 37251,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto 8+",
                position: 2,
                disabled: false,
                types: [],
                file: "/r/a/ra_o-royal-canin-mini-indoor-adulto-8_.jpg",
              },
              {
                id: 34160,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto 8+",
                position: 3,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-indoor-8_.jpg",
              },
              {
                id: 34161,
                media_type: "image",
                label: "Ração Royal Canin Mini Indoor Adulto 8+",
                position: 4,
                disabled: false,
                types: [],
                file: "/n/i/niveis-indoor-8_.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "93",
                label: "1 kg",
              },
              {
                code: "110",
                label: "7,5 kg",
              },
              {
                code: "98",
                label: "2,5 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Dachshund Adulto",
            sku: "1046",
            type: "configurable",
            url: "racao-royal-canin-racas-especificas-dachshund-adulto",
            price: 48.69,
            specialPrice: 45.9,
            image: "/r/a/racao_royal_canin_dachshund_adulto_3.jpg",
            imageGallery: [
              {
                id: 29905,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Dachshund Adulto",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_dachshund_adulto_3.jpg",
              },
              {
                id: 34190,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Dachshund Adulto",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-dachshund-adulto-royal_1.jpg",
              },
              {
                id: 34191,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Dachshund Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-dachshund-adulto-royal_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "93",
                label: "1 kg",
              },
              {
                code: "101",
                label: "3 kg",
              },
              {
                code: "110",
                label: "7,5 kg",
              },
              {
                code: "98",
                label: "2,5 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Boxer Adulto",
            sku: "1040",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-boxer-adulto",
            price: 227.79,
            specialPrice: "182.23",
            image: "/r/a/racao_royal_canin_boxer_adulto_2.jpg",
            imageGallery: [
              {
                id: 29891,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Boxer Adulto",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_boxer_adulto_2.jpg",
              },
              {
                id: 34164,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Boxer Adulto",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-boxer-royal_1.gif",
              },
              {
                id: 34165,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Boxer Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-boxer_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Boxer Junior",
            sku: "1041",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-boxer-junior",
            price: 239.19,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_boxer_junior_2.jpg",
            imageGallery: [
              {
                id: 29893,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Boxer Junior",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_boxer_junior_2.jpg",
              },
              {
                id: 34168,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Boxer Junior",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-boxer-junior-royal_1.jpg",
              },
              {
                id: 34169,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Boxer Junior",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-boxer-junior-royal_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Bulldog Francês Adulto",
            sku: "1042",
            type: "configurable",
            url: "racao-royal-canin-racas-especificas-bulldog-frances-adulto",
            price: 48.69,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_bulldog_franc_s_adulto_3.jpg",
            imageGallery: [
              {
                id: 29897,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Francês Adulto",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_bulldog_franc_s_adulto_3.jpg",
              },
              {
                id: 34174,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Francês Adulto",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-bullfog-adult-royal_1.jpg",
              },
              {
                id: 34175,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Francês Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-bulldogf-adulto-royal_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "93",
                label: "1 kg",
              },
              {
                code: "110",
                label: "7,5 kg",
              },
              {
                code: "98",
                label: "2,5 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Bulldog Inglês Adulto",
            sku: "1044",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-bulldog-ingles-adulto",
            price: 227.79,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_bulldog_ingles_adulto_2.jpg",
            imageGallery: [
              {
                id: 29899,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Inglês Adulto",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_bulldog_ingles_adulto_2.jpg",
              },
              {
                id: 34178,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Inglês Adulto",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-bulldogi-adulto-royal.jpg",
              },
              {
                id: 34179,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Inglês Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-bulldogi-adulto-royal.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Bulldog Inglês Junior",
            sku: "1045",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-bulldog-ingles-junior",
            price: 239.19,
            specialPrice: "227.71",
            image: "/r/a/racao_royal_canin_bulldog_ingles_junior_2.jpg",
            imageGallery: [
              {
                id: 29901,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Inglês Junior",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_bulldog_ingles_junior_2.jpg",
              },
              {
                id: 34182,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Inglês Junior",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-bulldogi-junior-royal.jpg",
              },
              {
                id: 34183,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Bulldog Inglês Junior",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-bulldogi-junior-royal.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Dachshund Junior",
            sku: "1047",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-dachshund-junior",
            price: 112.39,
            specialPrice: "NaN",
            image: "/d/a/dachshund-junior.jpg",
            imageGallery: [
              {
                id: 29908,
                media_type: "image",
                label: "Ração Royal Canin Dachshund Junior",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/d/a/dachshund-junior.jpg",
              },
              {
                id: 34194,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Dachshund Junior",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-dachshund-junior-junior_1.jpg",
              },
              {
                id: 34195,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Dachshund Junior",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-dachshund-junior-royal_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "98",
                label: "2,5 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Golden Adulto",
            sku: "1048",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-golden-adulto",
            price: 227.79,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_golden_retriever_adulto_2.jpg",
            imageGallery: [
              {
                id: 29910,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Golden Adulto",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_golden_retriever_adulto_2.jpg",
              },
              {
                id: 34198,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Golden Adulto",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-golden-adulto-royal.jpg",
              },
              {
                id: 34199,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Golden Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-golden-adulto-royal.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Golden Junior",
            sku: "1049",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-golden-junior",
            price: 239.19,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_golden_retriever_junior_2.jpg",
            imageGallery: [
              {
                id: 29912,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Golden Junior",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_golden_retriever_junior_2.jpg",
              },
              {
                id: 34202,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Golden Junior",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-golden-junior-royal_1.jpg",
              },
              {
                id: 34203,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Golden Junior",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-golden-junior-royal_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Labrador Adulto",
            sku: "1050",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-labrador-adulto",
            price: 227.79,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_labrador_adulto_2.jpg",
            imageGallery: [
              {
                id: 29914,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Labrador Adulto",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_labrador_adulto_2.jpg",
              },
              {
                id: 34206,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Labrador Adulto",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-labrador-adulto-royal.jpg",
              },
              {
                id: 34207,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Labrador Adulto",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-labrador-adulto-royal.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: false,
          },
          {
            name: "Ração Royal Canin Raças Específicas Labrador Junior",
            sku: "1051",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-labrador-junior",
            price: 239.19,
            specialPrice: "NaN",
            image: "/r/a/racao_royal_canin_labrador_junior_2.jpg",
            imageGallery: [
              {
                id: 29916,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Labrador Junior",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/r/a/racao_royal_canin_labrador_junior_2.jpg",
              },
              {
                id: 34210,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Labrador Junior",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-labrador-junior-royaal.jpg",
              },
              {
                id: 34211,
                media_type: "image",
                label: "Ração Royal Canin Raças Específicas Labrador Junior",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-labrador-junior-royal.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: true,
          },
          {
            name: "Ração Royal Canin Raças Específicas Pastor Alemão Junior",
            sku: "1055",
            type: "configurable",
            url: "rac-o-royal-canin-racas-especificas-pastor-alem-o-junior",
            price: 227.79,
            specialPrice: "NaN",
            image: "/p/a/pastor-alemao-junior_1.jpg",
            imageGallery: [
              {
                id: 29921,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Pastor Alemão Junior",
                position: 1,
                disabled: false,
                types: ["image", "small_image", "thumbnail"],
                file: "/p/a/pastor-alemao-junior_1.jpg",
              },
              {
                id: 34222,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Pastor Alemão Junior",
                position: 1,
                disabled: false,
                types: [],
                file: "/n/i/niveis-pastor-junior-royal_1.jpg",
              },
              {
                id: 34223,
                media_type: "image",
                label:
                  "Ração Royal Canin Raças Específicas Pastor Alemão Junior",
                position: 2,
                disabled: false,
                types: [],
                file: "/q/u/quantidade-pastor-junior-royal_1.jpg",
              },
            ],
            brand: {
              id: "317",
              label: "Royal Canin",
            },
            variations: [
              {
                code: "116",
                label: "12 kg",
              },
            ],
            stockAvailable: true,
          },
        ],
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

    royalcanin: {
      status: 302,
      data: {
        metaDescription: "MetaDescription da página 404",
        metaTitle: "GeraçãoPet - Página não encontrada!",
        pageType: "category",
      },
      target: "/categoria",
    },
  };

  const response = urls[url] ?? urls[404];

  res.statusCode = 200;
  res.json(response);
};
