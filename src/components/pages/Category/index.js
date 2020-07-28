import React, { useContext } from "react";
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

const Category = ({ content }) => {
  const { state } = useContext(store);
  const { action } = state.category;

  return (
    <TwoColumns
      beforeContent={
        <React.Fragment>
          <CategoryBanner
            categoryName={content.data.pageName}
            items={content.data.breadcrumbs}
          />
          <CategoryTools />
        </React.Fragment>
      }
      content={content}
      left={
        action === "sort" ? (
          <CategorySort sorters={content.data.sortOptions} />
        ) : (
          <CategoryFilter filters={content.data.filtersAvailable} />
        )
      }
    >
      <CategoryDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
      <ListProducts content={content} />
    </TwoColumns>
  );
};

export default Category;
