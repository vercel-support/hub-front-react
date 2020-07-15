import React from "react";
import Link from "next/link";
import FooterLinksStyled from "./styles";

const FooterLinks = () => (
  <FooterLinksStyled>
    <li>
      <Link href={`/[...page]`} as="/institucional">
        <a>institucional</a>
      </Link>
    </li>
    <li>
      <Link href={`/[...page]`} as="/central-de-ajuda">
        <a>central de ajuda</a>
      </Link>
    </li>
    <li>
      <Link href={`/[...page]`} as="/blog">
        <a>blog</a>
      </Link>
    </li>
  </FooterLinksStyled>
);

export default FooterLinks;
