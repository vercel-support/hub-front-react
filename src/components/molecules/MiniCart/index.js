import React, { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import { ShoppingCart } from "@material-ui/icons";
import MiniCartStyled from "./styles";

const MiniCart = () => {
  const [cartProducts, setCartProducts] = useState(0);
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("productList") || "[]");
    setCartProducts(products.length);
  }, []);

  return (
    <MiniCartStyled>
      <Link href="/[page]" as="/cart">
        <a>
          <Badge badgeContent={cartProducts} color="primary">
            <ShoppingCart htmlColor="white" />
          </Badge>
        </a>
      </Link>
    </MiniCartStyled>
  );
};

export default MiniCart;
