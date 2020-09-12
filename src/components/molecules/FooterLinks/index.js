import React from "react";
import Link from "next/link";
import FooterLinksStyled from "./styles";

const FooterLinks = () => (
  <FooterLinksStyled>
    <li>
      <Link href={`/[...page]`} as="/central-de-atendimento">
        <a>
          <Sms />
          institucional
        </a>
      </Link>
    </li>
    <li>
    <Link href={`/[...page]`} as="/central-de-atendimento">
        <a>
          <Sms />
          central de ajuda
        </a>
      </Link>
    </li>
  </FooterLinksStyled>
);

export default FooterLinks;
