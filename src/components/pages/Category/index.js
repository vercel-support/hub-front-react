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
import { categoryPageView } from '../../../../lib/ga';

const Category = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const { action } = state.category;
  const [products, setProducts] = useState(content.data.products);

  console.log("Produtos", products);
  useEffect(() => {
    categoryPageView(window.dataLayer.push, window.ga, {products, url: content.data.categoryUrl, pageName: content.data.pageName});
  }, []);

  useEffect(() => {
    console.log("useEffect", state, dispatch);
    // dispatch({ type: "SET_CATEGORY", payload: products });
  }, [products, state]);

  return (
    <TwoColumns
      beforeContent={
        <React.Fragment>
          <CategoryBanner
            categoryName={content.data.pageName}
            items={content.data.breadcrumbs}
          />
          {/* <CategoryTools /> */}
        </React.Fragment>
      }
      content={content}
      left={
        /* action === "sort" ? (
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
        ) */
        <CategoryFilter
          filters={content.data.filtersAvailable}
          setProducts={setProducts}
        />
      }
    >
      <CategoryDescription description={content.data.description} />
      <ListProducts
        content={content}
        products={products}
        setProducts={setProducts}
      />
    </TwoColumns>
  );
};

export default Category;
