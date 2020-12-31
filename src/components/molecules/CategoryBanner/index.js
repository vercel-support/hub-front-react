import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import CategoryBannerStyled from "./styles";

const CategoryBanner = ({ categoryName, items = false }) => (
  <CategoryBannerStyled>
    {items && <Breadcrumbs items={items} />}
    <h1>{categoryName}</h1>
  </CategoryBannerStyled>
);

export default CategoryBanner;
