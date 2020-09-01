import React, { useState, useEffect } from "react";
import axios from "axios";
import { store } from "../../../store";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { ProductCard } from "../../molecules";
import ListProductsStyled from "./styles";

const ListProducts = ({ content, products, setProducts }) => {
  const [page, setPage] = useState(content.data.currentPage);
  let {
    // products = [],
    productsPerPage = 16,
    sortedBy = "Nome do produto",
    sortOptions = [],
  } = content.data;
  // const [items, setItems] = useState(products);

  useEffect(() => {
    setPage(0);
  }, [products]);

  return (
    <ListProductsStyled>
      <Grid container>
        {products.map((product) => (
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
            page={page}
            size="large"
            onChange={(event, cpage) => {
              setPage(cpage);
              /*axios
                .get(
                  `http://18.229.234.11:3000/api/V2/catalogs/redirect?url=marcas/royal-canin&storeId=5e8e1c6e43a61128433f0eed&page=${
                    cpage - 1
                  }&perPage=${productsPerPage}`
                )
                .then(({ data }) => {
                  console.log(data);
                  setProducts(data.data.products);
                });*/
            }}
          />
        </Grid>
      </Grid>
    </ListProductsStyled>
  );
};

export default ListProducts;
