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
        description:
          '<p class="productDescription">A <b>Royal Canin</b> é uma marca de ração muito bem conceituada no mercado, é considerada uma boa ração, <b>super premium</b>, que atende a todas as necessidades do seu <b>cachorro e gato</b>, com mais de 150 alimentos com produtos específicos para raças, portes, idades, estilos de vida, necessidades específicas, cuidados especiais e auxiliares no tratamento de algumas doenças.<br>\r\nA <b>Royal Canin</b> é uma das maiores empresas de <b>ração para cães e gatos</b>, conhecida mundialmente, com 13 fábricas no mundo todo e com presença em 92 países e por garantir o melhor alimento para o a seu pet, com tudo o que ele precisa para ter uma melhor qualidade de vida.\r\n <b></b></p>\r\n<h2 class="subTitle">Royal Canin para Cachorros</h2>\r\n<p class="productDescription">Ração é o alimento mais importante da vida do seu cachorro, por isso é preciso tomar cuidado na hora de escolher a ideal. <br>\r\nA <b>Ração Royal Canin</b> está presente em todas as fases da vida do seu cachorro, possui linhas específicas para idade, porte e necessidades específicas. <br>\r\nPara <b>cães filhotes a Royal Canin</b> possui as linhas: <b>X-Small Junior e Mini Junior ou Mini Indoor Junior</b> para os cães filhotes de porte pequeno, até o 8º mês de vida. A <b>Royal Medium Junior</b> para cães de porte médio até 12 meses de idade e <>Royal Maxi Junior</b> para cães de porte grande até 15 meses de idade. A <b>Royal Giant Puppy</b> para cachorros com porte gigante até o 8º mês de vida e o <b>Royal Giant Junior</b> até o 15º mês. <br>\r\nPara outras fases da vida a <b>Royal Canin</b> também oferece a <b>ração para a cães adultos</b> de porte pequeno, médio e grande, e a <b>sênior</b>, para os cachorros a partir dos 7, 8, 10 ou 12 anos de idade.\r\nEntre as linhas para cachorro ainda estão a <b>Light</b>, que ajuda na dieta dos cães com sobrepeso, A <b>Sensible</b> para cães que têm dificuldade em comer, com um maior sabor, bem mais palatável. E ainda a <b>Sterilised</b>, para cães castrados que precisam de uma manutenção do peso ideal, com uma ração que satisfaz o a fome do cão mais rápido e faz com que ele consuma menores quantidades. \r\n</p>\r\n\r\n<h2 class="subTitle">Royal Canin para Gatos</h2>\r\n<p class="productDescription">Os gatos também possuem suas exigências, assim como os cães, e a linha de rações para gato da Royal Canin está presente em todas as fases de suas vidas. Para agradar tanto aos filhotes, com as <b>Rações Royal Canin Kitten</b> como aos adultos e sênior, como a <b>Ração Royal Canin Intense Hairball</b>, eliminando as bolas de pelo do seu felino, a <b>Ração Royal Canin Sensible</b>, para os gatos que têm dificuldade em comer, a <b>Ração Royal Canin Exigent</b> é ainda mais palatável. A <b>Ração Royal Canin Digestive Care</b> para os que precisam de um cuidado a mais na hora da digestão. A <b>Royal canin Gato Fit</b>, que seria como a Light para os cachorros, ideal para a perda de peso do felino. E a Beleza da Pelagem, que foi pensada para deixar a pele e o pelo do gato mais hidratados.\r\nAinda nas rações da Royal para gatos, tem uma linha especial para os gatos castrados, a <b>Royal Gato Sterilised</b>, produzida especialmente para gatos que precisam manter o peso ideal após a castração\r\n</p>\r\n\r\n<h2 class="subTitle">Royal Canin Raças Específicas</h2>\r\n<p class="productDescription">Dentre as linhas específicas da Royal Canin, estão divididas entre cães e gatos, satisfazendo as necessidades de cada raça, sendo que para gatos, são quatro tipos,<b> Maine Coon, Siamês, Persa e filhote de Persa.</b> <br>\r\nJá para os cachorros, a diversidade de rações é imensa, sempre trazendo <b>alimentos balanceados específicos para a raça</b> do cão, como para o <b>Labrador</b>, por exemplo, que é uma ração ideal para auxiliar na saúde dos ossos e articulações. Já para o <b>Pug</b>, a ração precisa conter grãos específicos para ajudar na mastigação e ajuda a manter um peso saudável, evitando o sobrepeso.<br>\r\nE assim segue com a marca para as outras raças como o <b>Boxer, Bulldog Francês, Bulldog Inglês, Dachshund, Golden, Labrador, Maltês, Pastor Alemão, Poodle, Pug, Rottweiler, Schnauzer, Shih Tzu ou Yorkshire.</b> Todas pensando na dieta específica do seu cachorro.</p>\r\n\r\n<h2 class="subTitle">Royal Canin Veterinary Diet</h2>\r\n<p class="productDescription">A Royal Canin conta com uma linha especializada para o tratamento de saúde de cães e gatos, porém é sempre recomendado que antes de utilizar a <b>Ração Royal Canin Veterinary Diet</b>, um médico veterinário seja consultado para que seja dada a orientação correta sobre a dieta. Entre as rações Veterinary Diet estão a Diabética, Cardíaca, Gastro Intestinal, Hipoalergênica, Obesidade, Hepática, Renal, Saciedade, Cuidado para Pele, Controle de Peso e Urinária.</p>',
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
      status: 200,
      store: {
        name: "Centro de Distribuição",
        id: "cd",
      },
      data: {
        pageType: "product",
        sku: "4710",
        metaTitle: "Apoquel Dermatológico Zoetis para Cães",
        metaDescription:
          "Compre Apoquel Zoetis para Cães em comprimidos com melhor preço na Geração Pet e acabe com a coceira do seu pet. Entrega garantida para todo Brasil",
        specifications: [
          {
            id: 81,
            type: "select",
            name: "Marca",
            value: "Zoetis",
          },
          {
            id: 298,
            type: "select",
            name: "Linha",
            value: "Apoquel",
          },
          {
            id: 283,
            type: "multiselect",
            name: "Fase da Vida",
            value: "Adulto, Sênior",
          },
          {
            id: 285,
            type: "multiselect",
            name: "Indicação",
            value: "Cão",
          },
          {
            id: 284,
            type: "multiselect",
            name: "Porte",
            value: "Pequeno, Médio, Grande, Gigante, Todos",
          },
        ],
        name: "Apoquel Dermatológico Zoetis para Cães",
        shortDescription:
          "Apoquel é a inovação no tratamento do prurido associado às dermatites alérgicas, incluindo dermatite atópica em cães. Toda a tranquilidade e paz que a coceira não traz. Diferentemente das terapias comuns com corticoides, ciclosporina ou anti-histamínicos, Apoquel é o único tratamento desenvolvido para agir direto na fonte da coceira, com alívio rápido em até 4 horas e com duração de 24 horas após uma única dose.",
        description:
          '<h3 class="productDescriptionTitle">Apoquel Dermatológico Zoetis para Cães</h3>\r\n\r\n<p class="productDescription"><b>Apoquel</b> é a inovação no tratamento do prurido associado às dermatites alérgicas, incluindo dermatite atópica em cães. Toda a tranquilidade e paz que a coceira não traz.<br>Diferentemente das terapias comuns com corticoides, ciclosporina ou anti-histamínicos, Apoquel é o único tratamento desenvolvido para agir direto na fonte da coceira, com alívio rápido em até 4 horas e com duração de 24 horas após uma única dose.</p>\r\n<br><br>\r\n\r\n\r\n<h4 class="productDescriptionSubTitle">Por que recomendamos o Apoquel Dermatológico Zoetis para Cães</h4>\r\n<p class="productDescription">- Ação rápida: Alivio da coceira em 4 horas; <br>- Alivia a coceira por 24 horas após uma única dose; <br>- Seguro e eficaz no longo prazo;<br> - Não contêm corticoides, ciclosporina ou anti-histamínico;<br> - Pode ser utilizado em cães com mais de 1 ano de idade;</p>\r\n<br><br>\r\n\r\n\r\n<h4 class="productDescriptionSubTitle">Modo de usar</h4>\r\n<p class="productDescription">A dose inicial recomendada e de 0,4 a 0,6mg/Kg de oclacitinib, administrado oralmente, duas vezes ao dia por 14 dias.<br>\r\nPara a terapia de manutenção (após 14 dias iniciais), a mesma dose deve ser administrada (0,4 a 0,6 mg/kg, uma vez ao dia. A necessidade da terapia de manutenção de longa duração deve ser baseada numa avaliação de risco-benefício individual, realizada pelo médico veterinário responsável.</p>\r\n<br><br>\r\n\r\n<h4 class="productDescriptionSubTitle">Precauções</h4>\r\n<p class="productDescription">Não deve ser utilizado em cães com menos de 12 meses de idade e nem em cães com infecções severas.<br>Não deve ser utilizado em animais destinados a reprodução, ou em cadelas prenhes ou lactantes. <br>\r\nO uso deste medicamento não foi avaliado em combinação com glucocorticóides, ciclosporina, ou outros agentes imunossupressores sistêmicos. </p><br><br>\r\n\r\n<h4 class="productDescriptionSubTitle">Composição Básica</h4>\r\n<p class="productDescription">Apoquel 3,6mg: Cada 100 mg de <b>Apoquel Zoetis</b> contém: Oclacitinib 3,6mg, Excipiente..q.s.p..100m.</p>\r\n<p class="productDescription">Apoquel 5,4mg: Cada 100 mg de <b>Apoquel Zoetis</b> contém: Oclacitinib 5,4mg, Excipiente..q.s.p..100m.</p>\r\n<p class="productDescription">Apoquel 16mg: Cada 100 mg de <b>Apoquel Zoetis</b> contém: Oclacitinib 16mg, Excipiente..q.s.p..100m.</p>\r\n<br><br>\r\n\r\n<h4 class="productDescriptionSubTitle hide-below-960">Saiba Mais Sobre o <b>Apoquel</b></h4>\r\n<div class="hide-below-960"><iframe width="640" height="360" src="https://www.youtube.com/embed/bh2ATfSbHw0?rel=0" frameborder="0" allowfullscreen></iframe></div><br><br>\r\n\r\n<h4 class="productDescriptionSubTitle">Bula Apoquel Dermatológico Zoetis para Cães</b></h4>\r\n<p class="productDescription"><a target="_blank" href="https://products-info-public.s3-sa-east-1.amazonaws.com/bulas/zoetis/bula-apoquel.pdf">Bula Apoquel Dermatológico Zoetis para Cães. </a></p>\r\n\r\n<h4 class="productDescriptionSubTitle">Sobre a <a href="https://www.geracaopet.com.br/marcas/zoetis">Zoetis</a></h4>\r\n<p class="productDescription">Zoetis é uma companhia líder em saúde animal, focada em apoiar os clientes e seus respectivos negócios. Com o legado de mais de 60 anos de história, a Zoetis descobre, desenvolve, produz e comercializa vacinas e medicamentos veterinários para animais de criação e de companhia.</p>',
        type: "configurable",
        defaultCategory: {
          code: "479",
          friendlyLabel: "Tratamento de Pele",
          label: "Cachorro > Tratamento de Pele",
        },
        image: "/a/p/apoguel.jpg",
        imageGallery: [
          {
            id: 25723,
            media_type: "image",
            label: "Apoquel",
            position: 1,
            disabled: false,
            types: ["image", "small_image", "thumbnail", "swatch_image"],
            file: "/a/p/apoguel.jpg",
          },
          {
            id: 32742,
            media_type: "image",
            label: "Apoquel Dermatológico Zoetis para Cães",
            position: 1,
            disabled: false,
            types: [],
            file: "/t/a/tabela.png",
          },
        ],
        children: [
          {
            sku: "7898049719266",
            name: "Apoquel 3,6 mg",
            variation: {
              code: "17",
              label: "3,6 mg",
            },
            price: 183.5,
            specialPrice: 165.15,
            inPromotion: true,
            percentagePromotionDiscount: "10",
            weight: 0.03,
            width: 0.2,
            height: 0.12,
            length: 0.12,
            pickupAvailable: false,
            quantityAvailableForPickup: 0,
          },
          {
            sku: "7898049719273",
            name: "Apoquel 5,4 mg",
            variation: {
              code: "19",
              label: "5,4 mg",
            },
            price: 189,
            specialPrice: 170.1,
            inPromotion: true,
            percentagePromotionDiscount: "10",
            weight: 0.03,
            width: 0.2,
            height: 0.12,
            length: 0.12,
            pickupAvailable: false,
            quantityAvailableForPickup: 0,
          },
          {
            sku: "7898049719280",
            name: "Apoquel 16 mg",
            variation: {
              code: "21",
              label: "16 mg",
            },
            price: 393.9,
            specialPrice: 354.51,
            inPromotion: true,
            percentagePromotionDiscount: "10",
            weight: 0.03,
            width: 0.2,
            height: 0.12,
            length: 0.12,
            pickupAvailable: false,
            quantityAvailableForPickup: 0,
          },
        ],
      },
      target: "/product",
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
