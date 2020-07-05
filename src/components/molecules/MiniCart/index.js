import React from "react";
import Link from "next/link";
import { ShoppingCart } from "@material-ui/icons";

const MiniCart = () => (
  <Link href="/[page]" as="/cart">
    <a>
      <ShoppingCart />
    </a>
  </Link>
);

export default MiniCart;
