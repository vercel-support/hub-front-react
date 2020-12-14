import React from "react";
import Link from "next/link";
import {
    AdressesIcon,
    CreditsIcon,
    MenuItem,
    MenuTitle,
    MenuWrapper,
    OrdersIcon,
    AccountIcon,
} from "./styles";

const CustomerMenu = ({ content }) => {

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
        </MenuWrapper>
    );
};

export default CustomerMenu;