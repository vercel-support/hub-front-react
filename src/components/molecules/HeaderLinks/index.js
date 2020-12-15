import React, { useState } from "react";
import Link from "next/link";
import { ExpandLess, ExpandMore, Person, Sms } from "@material-ui/icons";
import { DropDown } from "../../atoms";
import HeaderLinksStyled from "./styles";
import { AccountResume } from "../../atoms";

const SubMenu = () => (
  <ul>
    <li>
      <Link href={`/minha-conta`}>
        <a>Minha Conta</a>
      </Link>
    </li>
    <li>
      <Link href={`/[...page]`} as="/meus-pedidos">
        <a>Meus Pedidos</a>
      </Link>
    </li>
    <li>
      <Link href={`/[...page]`} as="/atendimento">
        <a>Atendimento</a>
      </Link>
    </li>
    <li>
      <Link href={`/[...page]`} as="/logout">
        <a>Sair</a>
      </Link>
    </li>
  </ul>
);

const HeaderLinks = () => (
  <HeaderLinksStyled>
    <li>
      <Link href={`/[...page]`} as="/central-de-atendimento">
        <a>
          <Sms />
          atendimento
        </a>
      </Link>
    </li>
    <li>
      <AccountResume desktop={true}/>
      {/* {open ? <ExpandLess /> : <ExpandMore />}
      <DropDown open={open}>
        <SubMenu />
      </DropDown> */}
    </li>
  </HeaderLinksStyled>
);

export default HeaderLinks;
