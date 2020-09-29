import React, { useContext, useState, useEffect } from "react";
import { requestProducts } from "../../../services";
import { store } from "../../../store";
import { Grid } from "@material-ui/core";
import { ProductCard } from "../../molecules";
import ListProductsStyled, { PaginationStyled } from "./styles";
import InfiniteScroll from "react-infinite-scroll-component";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ListProducts = ({ products, handlePageChange, resetPage }) => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    handlePageChange(page);
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, [resetPage]);

  return (
    <ListProductsStyled>
      
      <InfiniteScroll
        dataLength={products.length}
        next={nextPage}
        hasMore={true}
/*         loader={<h4>Loading...</h4>} */
      >
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
        </Grid>
        
      </InfiniteScroll>


{/*         <Grid item xs={12} alignItems="center" justify="center">
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
        </Grid> */}

    </ListProductsStyled>
  );
};

export default ListProducts;
