import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import CategoryBannerStyled from "./styles";

const CategoryBanner = ({ categoryName, items }) => (
  <CategoryBannerStyled>
    <Breadcrumbs items={items} />
    <h2>{categoryName}</h2>
  </CategoryBannerStyled>
);

export default CategoryBanner;
