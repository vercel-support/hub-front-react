import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { ProductCard } from "../../molecules";
import ListProductsStyled from "./styles";

const ListProducts = ({ content }) => {
  const {
    currentPage = 0,
    products = [],
    productsPerPage = 16,
    sortedBy = "Nome do produto",
    sortOptions = [],
  } = content.data;
  const [items, setItems] = useState(products);

  return (
    <ListProductsStyled>
      <Grid container>
        {items.map((product) => (
          <ProductCard
            item
            product={product}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={product.sku}
          />
        ))}
        <Grid item xs={12} alignItems="center" justify="center">
          <Pagination
            count={10}
            size="large"
            onChange={(event, page) => {
              axios
                .get(
                  `http://18.229.234.11:3000/api/V2/catalogs/redirect?url=marcas/royal-canin&storeId=5e8e1c6e43a61128433f0eed&page=${
                    page - 1
                  }&perPage=${productsPerPage}`
                )
                .then(({ data }) => setItems(data.data.products));
            }}
          />
        </Grid>
      </Grid>
    </ListProductsStyled>
  );
};

export default ListProducts;
