import React from "react";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import { ShoppingCart } from "@material-ui/icons";
import MiniCartStyled from "./styles";

const MiniCart = ({ quantity = 3 }) => (
  <MiniCartStyled>
    <Link href="/[page]" as="/cart">
      <a>
        <Badge badgeContent={quantity} htmlColor="white">
          <ShoppingCart htmlColor="white" />
        </Badge>
      </a>
    </Link>
  </MiniCartStyled>
);

export default MiniCart;
