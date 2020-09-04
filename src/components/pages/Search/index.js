import React, { useContext, useEffect, useState } from "react";
import { store } from "../../../store";
import { CategoryDescription } from "../../atoms";
import {
  CategoryBanner,
  CategoryFilter,
  CategorySort,
  CategoryTools,
} from "../../molecules";
import { ListProducts } from "../../organisms";
import { TwoColumns } from "../../templates";

const Search = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const { action } = state.category;
  const [products, setProducts] = useState(content.data.products);

  useEffect(() => {
    setProducts(content.data.products);
  }, [content]);

  return (
    <TwoColumns
      beforeContent={
        <React.Fragment>
          <CategoryBanner categoryName={content.data.pageName} />
          <CategoryTools />
        </React.Fragment>
      }
      content={content}
      left={
        action === "sort" ? (
          // <CategorySort sorters={content.data.sortOptions} />
          <CategoryFilter
            filters={content.data.filtersAvailable}
            setProducts={setProducts}
          />
        ) : (
          <CategoryFilter
            filters={content.data.filtersAvailable}
            setProducts={setProducts}
          />
        )
      }
    >
      <ListProducts
        content={content}
        products={products}
        setProducts={setProducts}
      />
    </TwoColumns>
  );
};

export default Search;
