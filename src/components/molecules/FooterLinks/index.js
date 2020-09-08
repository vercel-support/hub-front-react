import React from "react";
import Link from "next/link";
import FooterLinksStyled from "./styles";

const FooterLinks = () => (
  <FooterLinksStyled>
    <li>
      <Link href="/central-de-ajuda">
        <a>institucional</a>
      </Link>
    </li>
    <li>
      <Link href="/central-de-ajuda">
        <a>central de ajuda</a>
      </Link>
    </li>
    <li>
      <Link href="/blog">
        <a>blog</a>
      </Link>
    </li>
  </FooterLinksStyled>
);

export default FooterLinks;
