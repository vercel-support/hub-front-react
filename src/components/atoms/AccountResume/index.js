import React, { useContext, useEffect, useState } from "react";
import { store } from "../../../store";
import { Person } from "@material-ui/icons";
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import { Grid, Paper } from "@material-ui/core";

import {
    AccountIconStyled, 
    AccountTextStyled, 
    BalanceTextStyled, 
    DropDownMenuDesktopContainerStyled,
    DropDownMenuMobileContainerStyled,
    DropDownMenuItem,
    WrapperStyled 
} from "./styles";

import {
    AccountIcon,
    AdressesIcon,
    CreditsIcon,    
    LogoutIcon,
    OrdersIcon,
    PetsIcon,
} from "./styles";

import Link from "next/link";
import { numberToPrice } from "../../../utils/helpers";

const API_URL = process.env.API_URL;
import axios from "axios";

const DropDownMenuDesktop = ({ userLoggedIn, logout }) => {

    const handleLogoutClick = () => {
        logout();
    }

    return (
        <DropDownMenuDesktopContainerStyled>
                <Paper elevation={3}>
                    { !userLoggedIn && (
                        <Link href={`/minha-conta`}>
                            <DropDownMenuItem>
                                <PetsIcon />
                                <p>Entrar | Cadastrar</p>
                            </DropDownMenuItem>
                        </Link>
                    )}
                    <Link href={`/minha-conta/dados`}>
                        <DropDownMenuItem>
                            <AccountIcon />
                            <p>Meus dados</p>
                        </DropDownMenuItem>
                    </Link>
                    <Link href={`/minha-conta/enderecos`}>
                        <DropDownMenuItem>
                            <AdressesIcon />
                            <p>Endereços</p>
                        </DropDownMenuItem>
                    </Link>
                    <Link href={`/minha-conta/pedidos`}>
                        <DropDownMenuItem>
                            <OrdersIcon />
                            <p>Pedidos</p>
                        </DropDownMenuItem>
                    </Link>
                    <Link href={`/minha-conta/creditos`}>
                        <DropDownMenuItem>
                            <CreditsIcon />
                            <p>Créditos</p>
                        </DropDownMenuItem>
                    </Link>
                    { userLoggedIn && (
                        <DropDownMenuItem onClick={handleLogoutClick}>
                            <LogoutIcon />
                            <p>Sair</p>
                        </DropDownMenuItem>
                    )}
                </Paper>

        </DropDownMenuDesktopContainerStyled>
    );
}

const AccountResume = ({desktop}) => {
    const { state, dispatch } = useContext(store);
    const [ userFirstname, setUserFirstname ] = useState(null);
    const [ userBalance, setUserBalance ] = useState(null);
    const [ balanceObservation, setBalanceObservation ] = useState(null);
    const [ openDropDown, setOpenDropDown ] = useState(false);
    const [ userLoggedIn, setUserLoggedIn ] = useState(false);

    const logout = () => {
        dispatch({type: "SET_USER_LOGOUT"});
        window.location.reload();
    }

    const fetchBalance = async(savedToken) => {
        try{
            let serviceResponse = await axios.get(`${API_URL}/cart/cashback/balance?token=${savedToken}`);
            if(serviceResponse.data.firstname){
                setUserFirstname(serviceResponse.data.firstname);
                if(!serviceResponse.data.approved && !serviceResponse.data.pending)
                    dispatch({ type: "SET_USER_RESUME_INFO", payload: {
                        firstname: serviceResponse.data.firstname,
                        balance: null
                    } });
            }

            if(serviceResponse.data.approved && serviceResponse.data.approved > 0){
                setUserBalance(numberToPrice(serviceResponse.data.approved));
                dispatch({ type: "SET_USER_RESUME_INFO", payload: {
                    firstname: serviceResponse.data.firstname,
                    balance: numberToPrice(serviceResponse.data.approved)
                } });
            }
            else{
                if(serviceResponse.data.pending && serviceResponse.data.pending > 0){
                    setUserBalance(numberToPrice(serviceResponse.data.pending));
                    setBalanceObservation("(Em aprovação)");
                    dispatch({ type: "SET_USER_RESUME_INFO", payload: {
                        firstname: serviceResponse.data.firstname,
                        balance: numberToPrice(serviceResponse.data.pending),
                        balanceObs: "(Em aprovação)"
                    } });
                }
            }

            setUserLoggedIn(true);

        }
        catch(error){
            setUserFirstname(null);
            setUserBalance(null);
            setBalanceObservation(null);
            setUserLoggedIn(false);
        }
    }

    useEffect(() => {
        if(state.userResumeInfo){
            setUserFirstname(state.userResumeInfo.firstname || null);
            setUserBalance(state.userResumeInfo.balance || null);
            setBalanceObservation(state.userResumeInfo.balanceObs || null);
            setUserLoggedIn(true);
        }
        else{
            const savedToken = localStorage.getItem("customer-token");
            if(savedToken) fetchBalance(savedToken);
        }
    }, []);

    return (
        <WrapperStyled
            onClick={() => {if(desktop) setOpenDropDown(!openDropDown)}}
        >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={2}>
                            <AccountIconStyled>
                                <Person />
                            </AccountIconStyled>
                        </Grid>
                        <Grid item xs={10}>

                            <AccountTextStyled>
                                <div>
                                    <p>{userFirstname ? `Olá, ${userFirstname}` : "Minha conta"}</p>
                                    {userBalance && (
                                        <BalanceTextStyled>
                                            Saldo: {userBalance}
                                        </BalanceTextStyled>
                                    )}
                                    {balanceObservation && (
                                        <BalanceTextStyled>
                                            {balanceObservation}
                                        </BalanceTextStyled>
                                    )}
                                </div>
                                
                                {!openDropDown && (
                                    <ArrowDropDownRoundedIcon /> 
                                )}
                                {openDropDown && (
                                    <ArrowDropUpRoundedIcon /> 
                                )}
                            </AccountTextStyled>   
                        </Grid>
                    </Grid>
                </Grid>
                
                {desktop && openDropDown && (
                    <DropDownMenuDesktop userLoggedIn={userLoggedIn} logout={logout}/>
                )}
            </Grid>

        </WrapperStyled>

    );
};

export default AccountResume;