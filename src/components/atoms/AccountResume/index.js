import React, { useContext, useEffect, useState } from "react";
import { store } from "../../../store";
import { Person } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import {
    AccountIconStyled, 
    AccountTextStyled, 
    BalanceTextStyled, 
    WrapperStyled 
} from "./styles";
import { numberToPrice } from "../../../utils/helpers";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const AccountResume = () => {
    const { state, dispatch } = useContext(store);
    const [ userFirstname, setUserFirstname ] = useState(null);
    const [ userBalance, setUserBalance ] = useState(null);

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
                    setUserBalance(`${numberToPrice(serviceResponse.data.pending)} (Em aprovação)`);
                    dispatch({ type: "SET_USER_RESUME_INFO", payload: {
                        firstname: serviceResponse.data.firstname,
                        balance: `${numberToPrice(serviceResponse.data.pending)} (Em aprovação)`
                    } });
                }
            }

        }
        catch(error){
            setUserFirstname(null);
            setUserBalance(null);
        }
    }

    useEffect(() => {
        if(state.userResumeInfo){
            setUserFirstname(state.userResumeInfo.firstname || null);
            setUserBalance(state.userResumeInfo.balance || null);
        }
        else{
            const savedToken = localStorage.getItem("customer-token");
            if(savedToken) fetchBalance(savedToken);
        }
    }, []);

    return (
        <WrapperStyled>

            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <AccountIconStyled>
                        <Person />
                    </AccountIconStyled>
                </Grid>
                <Grid item xs={10}>
                    <AccountTextStyled>
                        <Grid container>
                            <Grid item xs={12}>
                                {userFirstname ? `Olá, ${userFirstname}` : "Minha conta"}
                            </Grid>
                            {userBalance ?
                                <Grid item xs={12}>
                                    <BalanceTextStyled>
                                        Saldo: {userBalance}
                                    </BalanceTextStyled>
                                </Grid> : 
                            null}
                        </Grid>
                    </AccountTextStyled>
                </Grid>
            </Grid>

        </WrapperStyled>

    );
};

export default AccountResume;