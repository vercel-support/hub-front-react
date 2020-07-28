import React from "react";
import Link from "next/link";
import {
  Availability,
  CardBrand,
  CardImage,
  CardName,
  CardPrice,
} from "../../atoms";
import ProductCardStyled from "./styles";

const ProductCard = (props) => {
  const { product } = props;

  return (
    <ProductCardStyled {...props}>
      <Link href={`/[...page]`} as={product.url}>
        <a>
          <CardImage image={product.image} name={product.name} />
          <CardName name={product.name} />
          <CardBrand brand={product.brand.label} />
          <CardPrice
            price={product.price}
            specialPrice={product.specialPrice}
          />
          <Availability available={product.stockAvailable} />
        </a>
      </Link>
    </ProductCardStyled>
  );
};

export default ProductCard;
