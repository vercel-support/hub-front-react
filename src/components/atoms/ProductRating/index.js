import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ProductRatingStyled from "./styles";

const ProductRating = ({ stars = 5 }) => (
  <ProductRatingStyled>
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarBorderIcon />
  </ProductRatingStyled>
);

export default ProductRating;
