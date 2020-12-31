import React, { useContext, useState, useEffect } from "react";
import { store } from "../../../store";
import {
    CreditsResumeContainer,
    CreditsResumeContainerMobile,
    HeaderContainer,
    TableCell,
    TableCellMobile,
    TableRow,
    PageWrapper,
} from "./styles";
import { Grid, Paper } from "@material-ui/core";
import { numberToPrice } from '../../../utils/helpers';

const API_URL = process.env.API_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
import axios from "axios";

const CustomerCredits = ({desktop}) => {

    const { dispatch, state } = useContext(store);
    const [ creditsData, setCreditsData ] = useState({
        approved: 0,
        pending: 0,
        history: []
    });
    const [ emptyCreditsMessage, setEmptyCreditsMessage ] = useState(null);

    const fetchCredits = async(token) => {
        try{
            dispatch({ type: "LOADING_DATA", payload: true });
            let serviceResponse = await axios.get(`${API_URL}/customers/rewards?token=${token}`);
            if(serviceResponse.status === 200 && serviceResponse.data){
                console.log(serviceResponse.data);
                setCreditsData(serviceResponse.data);
            }
            dispatch({ type: "LOADING_DATA", payload: false });
        }
        catch(error){
            setEmptyCreditsMessage(`Ops, você ainda não possui créditos.`);
            dispatch({ type: "LOADING_DATA", payload: false });
        }
    }

    useEffect(() => {
        if(state && state.customerState && state.customerState.loggedIn){
            fetchCredits(state.customerState.token);
        }
        else{
            window.location = `${FRONTEND_URL}/minha-conta`;
        }
    }, []);

    return (
        <PageWrapper>
            <h1>Meus créditos</h1>

            { desktop ?
            (
                <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                            <CreditsResumeContainer approved={true}>
                                <p>Saldo aprovado</p>
                                <h3>{numberToPrice(creditsData.approved)}</h3>
                            </CreditsResumeContainer>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                            <CreditsResumeContainer approved={false}>
                                <p>Saldo em aprovação</p>
                                <h3>{numberToPrice(creditsData.pending)}</h3>
                            </CreditsResumeContainer>
                        </Paper>
                    </Grid>
                </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper elevation={3}>
                                <HeaderContainer>
                                    <Grid container>
                                        <Grid item xs={2}>
                                            <TableCell>
                                                <h3>Data</h3>
                                            </TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell>
                                                <h3>Valor</h3>
                                            </TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell>
                                                <h3>Status</h3>
                                            </TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell>
                                                <h3>Válido de</h3>
                                            </TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell>
                                                <h3>até</h3>
                                            </TableCell>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TableCell>
                                                <h3>Pedido</h3>
                                            </TableCell>
                                        </Grid>
                                    </Grid>
                                </HeaderContainer>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper elevation={3}>
                                { creditsData.history.map((history) => (
                                    <TableRow>
                                        <Grid container>
                                            <Grid item xs={2}>
                                                <TableCell>
                                                    <p>{history.createdAtFormatted}</p>
                                                </TableCell>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TableCell>
                                                    <p>{numberToPrice(history.amount)}</p>
                                                </TableCell>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TableCell>
                                                    <p>{history.status}</p>
                                                </TableCell>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TableCell>
                                                    <p>{history.status === "Utilizado" ? "" : history.fromDate}</p>
                                                </TableCell>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TableCell>
                                                    <p>{history.status === "Utilizado" ? "" : history.toDate}</p>
                                                </TableCell>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TableCell>
                                                    <p>{history.order}</p>
                                                </TableCell>
                                            </Grid>
                                        </Grid>
                                    </TableRow>
                                )) }

                            </Paper>
                        </Grid>
                    </Grid>
                </React.Fragment>
            ):
            (
                <React.Fragment>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper elevation={3}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <CreditsResumeContainerMobile approved={true}>
                                            <p>Saldo aprovado</p>
                                            <h3>{numberToPrice(creditsData.approved)}</h3>
                                        </CreditsResumeContainerMobile>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CreditsResumeContainerMobile approved={false}>
                                            <p>Saldo em aprovação</p>
                                            <h3>{numberToPrice(creditsData.pending)}</h3>
                                        </CreditsResumeContainerMobile>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    { creditsData.history.map((history) => (
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper>
                                    <HeaderContainer>
                                        <Grid container spacing={3}>
                                            <Grid item xs={4}>
                                                <TableCellMobile>
                                                    <h3>Data</h3>
                                                    <p>{history.createdAtFormatted}</p>
                                                </TableCellMobile>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TableCellMobile>
                                                    <h3>Valor</h3>
                                                    <p>{history.amount}</p>
                                                </TableCellMobile>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TableCellMobile>
                                                    <h3>Status</h3>
                                                    <p>{history.status}</p>
                                                </TableCellMobile>
                                            </Grid>
                                            {
                                                history.status !== "Utilizado" && (
                                                <Grid item xs={4}>
                                                    <TableCellMobile>
                                                        <h3>Válido de</h3>
                                                        <p>{history.fromDate}</p>
                                                    </TableCellMobile>
                                                </Grid>
                                                )
                                            }
                                            {
                                                history.status !== "Utilizado" && (
                                                <Grid item xs={4}>
                                                    <TableCellMobile>
                                                        <h3>até</h3>
                                                        <p>{history.toDate}</p>
                                                    </TableCellMobile>
                                                </Grid>
                                                )
                                            }
                                            <Grid item xs={4}>
                                                <TableCellMobile>
                                                    <h3>Pedido</h3>
                                                    <p>{history.order}</p>
                                                </TableCellMobile>
                                            </Grid>

                                        </Grid>
                                    </HeaderContainer>

                                </Paper>
                            </Grid>
                        </Grid>
                    ))}
                </React.Fragment>
            )
            }


        </PageWrapper>
    );
}

export default CustomerCredits;