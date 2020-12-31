import React, { useContext } from "react";
import Link from "next/link";
import {
    AdressesIcon,
    CreditsIcon,
    MenuItem,
    MenuTitle,
    MenuWrapper,
    OrdersIcon,
    AccountIcon,
    LogoutIcon,
} from "./styles";
import { store } from "../../../store";

const CustomerMenu = ({ content }) => {
    const { dispatch } = useContext(store);

    const logout = () => {
        dispatch({type: "SET_USER_LOGOUT"});
        window.location.reload();
    }

    return (
        <MenuWrapper>
            { content && content.firstname && (
                <MenuTitle>
                    <h1>Olá, {content.firstname}!</h1>
                </MenuTitle>
            )}
            <Link href={`/minha-conta/dados`}>
                <MenuItem>
                    <AccountIcon />
                    <p>Meus dados</p>
                </MenuItem>
            </Link>
            <Link href={`/minha-conta/enderecos`}>
                <MenuItem>
                    <AdressesIcon />
                    <p>Endereços</p>
                </MenuItem>
            </Link>
            <Link href={`/minha-conta/pedidos`}>
                <MenuItem>
                    <OrdersIcon />
                    <p>Pedidos</p>
                </MenuItem>
            </Link>
            <Link href={`/minha-conta/creditos`}>
                <MenuItem>
                    <CreditsIcon />
                    <p>Créditos</p>
                </MenuItem>
            </Link>
            <MenuItem onClick={logout}>
                <LogoutIcon />
                <p>Sair</p>
            </MenuItem>
        </MenuWrapper>
    );
};

export default CustomerMenu;