import React, { useState } from "react";
import Link from "next/link";
import { ExpandLess, ExpandMore, Person, Sms } from "@material-ui/icons";
import { DropDown } from "../../atoms";
import HeaderLinksStyled from "./styles";

const SubMenu = () => (
  <u>
    <li>
      <Link href="/minha-conta">
        <a>Minha Conta</a>
      </Link>
    </li>
    <li>
      <Link href="/meus-pedidos">
        <a>Meus Pedidos</a>
      </Link>
    </li>
    <li>
      <Link href="/atendimento">
        <a>Atendimento</a>
      </Link>
    </li>
    <li>
      <Link href="/logout">
        <a>Sair</a>
      </Link>
    </li>
  </u>
);

const HeaderLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderLinksStyled>
      <li>
        <Link href="/atendimento">
          <a>
            <Sms />
            atendimento
          </a>
        </Link>
      </li>
      <li
        onClick={() => setOpen(!open)}
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
        style={{ position: "relative" }}
      >
        <Person />
        entrar | cadastrar
        {open ? <ExpandLess /> : <ExpandMore />}
        <DropDown open={open}>
          <SubMenu />
        </DropDown>
      </li>
    </HeaderLinksStyled>
  );
};

export default HeaderLinks;
