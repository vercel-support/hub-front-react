import React, { useState, useEffect } from "react";
import { requestProducts } from "../../../services";
import { store } from "../../../store";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { ProductCard } from "../../molecules";
import ListProductsStyled from "./styles";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ListProducts = ({ content, products, setProducts }) => {
  const [page, setPage] = useState(content.data.currentPage);
  let {
    categoryUrl = "",
    productsPerPage = 32,
    sortedBy = "Nome do produto",
    sortOptions = [],
  } = content.data;

  const handleSetProducts = async () => {
    const newProducts = await requestProducts(
      categoryUrl,
      page,
      "5e8e1c6e43a61128433f0eed",
      []
    );

    setProducts(newProducts);
  };

  const handlePagination = (action) => {
    if (action === "more") setPage(page + 1);
    else setPage(page > 1 ? page - 1 : page);
  };

  useEffect(() => {
    handleSetProducts();
  }, [page]);

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
          <ArrowBackIosIcon
            fontSize="small"
            onClick={() => handlePagination("less")}
          />
          {` ${page + 1} `}
          <ArrowForwardIosIcon
            fontSize="small"
            onClick={() => handlePagination("more")}
          />
        </Grid>
      </Grid>
    </ListProductsStyled>
  );
};

export default ListProducts;
