import React, { useContext, useState, useEffect } from "react";
import { requestProducts } from "../../../services";
import { store } from "../../../store";
import { Grid } from "@material-ui/core";
import { ProductCard } from "../../molecules";
import ListProductsStyled, { PaginationStyled } from "./styles";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ListProducts = ({ content, products, setProducts, currentPage }) => {
  const {
    state: {
      myStore: { id: storeID },
    },
  } = useContext(store);
  const [page, setPage] = useState(currentPage);
  let {
    categoryUrl = "",
    productsPerPage = 32,
    sortedBy = "Nome do produto",
    sortOptions = [],
  } = content.data;

  const handleSetProducts = async () => {
    if(categoryUrl){
      const { products, currentPage } = await requestProducts(
        categoryUrl,
        page,
        storeID,
        []
      );
  
      setProducts(products);
      setPage(currentPage);
    }
  };

  const handlePagination = (action) => {
    if (action === "more") setPage(page + 1);
    else setPage(page > 1 ? page - 1 : page);
  };

  useEffect(() => {
    handleSetProducts();
  }, [page, storeID]);

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
            xs={6}
            key={product.sku}
          />
        ))}
        <Grid item xs={12} alignItems="center" justify="center">
          <PaginationStyled>
            <ArrowBackIosIcon
              fontSize="small"
              onClick={() => handlePagination("less")}
            />
            {` ${page + 1} `}
            <ArrowForwardIosIcon
              fontSize="small"
              onClick={() => handlePagination("more")}
            />
          </PaginationStyled>
        </Grid>
      </Grid>
    </ListProductsStyled>
  );
};

export default ListProducts;
