import React, { useState, useContext } from "react";
import Link from "next/link";
import { ExpandLess, ExpandMore, Person, Sms } from "@material-ui/icons";
import { DropDown } from "../../atoms";
import HeaderLinksStyled from "./styles";
import { store } from "../../../store";

const SubMenu = () => (
  <ul>
    <li>
      <Link href={`/[...page]`} as="/minha-conta">
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

const HeaderLinks = () => {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(store);

  console.log("HeaderLinks", state);

  return (
    <HeaderLinksStyled>
      <li onClick={() => dispatch({ type: "OPEN_CHAT", payload: "x" })}>
        <Link href={`/[...page]`} as="/atendimento">
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
