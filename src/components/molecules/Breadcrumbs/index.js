import React from "react";
import Link from "next/link";
import BreadcrumbsStyled from "./styles";

const Breadcrumbs = ({ items = [] }) => (
  <BreadcrumbsStyled>
    {items.map((item) => (
      <li key={item.id}>
        <Link href={`/[...page]`} as={item.url}>
          <a>{item.name}</a>
        </Link>
      </li>
    ))}
  </BreadcrumbsStyled>
);

export default Breadcrumbs;
