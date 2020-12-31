import React, { useContext, useState, useEffect } from "react";
import { store } from "../../../store";
import { Grid, Hidden } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
    EditButton,
    PageWrapper,
    FormWrapper,
    InputContainer,
} from "./styles";
const API_URL = process.env.API_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
import axios from "axios";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomerData = ({}) => {
    const { state } = useContext(store);
    const [ editMode, setEditMode ] = useState(false);
    const [ customerData, setCustomerData ] = useState(null);
    const [ responseMessage, setResponseMessage ] = useState({
        message: null, status: null
    });
    const [ snackOpen, setSnackOpen ] = useState(false);

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackOpen(false);
    };

    useEffect(() => {
        if(state && state.customerState && state.customerState.loggedIn){
            setCustomerData(state.customerState.customerData);
        }
        else{
            window.location = `${FRONTEND_URL}/minha-conta`;
        }
    }, []);

    const saveChanges = async() => {
        let body = {
            token: state.customerState.token,
            email: customerData.email,
            firstname: customerData.firstname,
            lastname: customerData.lastname,
            cpf: customerData.taxvat,
        };
        try{
            await axios.post(`${API_URL}/customers/update-info`, body);
            setSnackOpen(true);
            setResponseMessage({
                message: "Dados atualizados!",
                status: true
            });
        }
        catch(error){
            setSnackOpen(true);
            setResponseMessage({
                message: error.response.data.message,
                status: false
            });
        }
    }

    const handleClickButton = (edit_mode) => {
        if(edit_mode) saveChanges();
        setEditMode(!edit_mode);
    }

    const handleInputChange = (event) => {
        setCustomerData({
            ...customerData,
            [event.target.name]: event.target.value
        });
    }

    if(customerData)
        return (
            <PageWrapper>
                <h1>Dados pessoais</h1>

                <FormWrapper>
                    <Grid container>
                        <Hidden mdDown>
                            <Grid item xs={4}>
                                <InputContainer>
                                    <h3>Nome</h3>
                                    {
                                        editMode ?
                                        <input 
                                            name="firstname"
                                            id="customer_first_name"
                                            type="text"
                                            value={customerData.firstname}
                                            onChange={handleInputChange}
                                        /> :
                                        <p>{customerData.firstname}</p>
                                    }
                                    
                                </InputContainer>
                            </Grid>
                            <Grid item xs={8}>
                                <InputContainer>
                                    <h3>Sobrenome</h3>
                                    {
                                        editMode ?
                                        <input 
                                            name="lastname"
                                            id="customer_last_name"
                                            type="text"
                                            value={customerData.lastname}
                                            onChange={handleInputChange}
                                        /> :
                                        <p>{customerData.lastname}</p>
                                    }
                                </InputContainer>
                            </Grid>
                            <Grid item xs={4}>
                                <InputContainer>
                                    <h3>E-mail</h3>
                                    {
                                        editMode ?
                                        <input 
                                            name="email"
                                            id="customer_email"
                                            type="text"
                                            value={customerData.email}
                                            onChange={handleInputChange}
                                        /> :
                                        <p>{customerData.email}</p>
                                    }
                                </InputContainer>
                            </Grid>
                            <Grid item xs={8}>
                                <InputContainer>
                                    <h3>CPF</h3>
                                    {
                                        editMode ?
                                        <input 
                                            name="taxvat"
                                            id="customer_cpf"
                                            type="text"
                                            value={customerData.taxvat}
                                            onChange={handleInputChange}
                                        /> :
                                        <p>{customerData.taxvat}</p>
                                    }
                                </InputContainer>
                            </Grid>
                        </Hidden>

                        <Hidden mdUp>
                            <Grid item xs={12}>
                                <InputContainer>
                                    <h3>Nome</h3>
                                    {
                                        editMode ?
                                        <input 
                                            name="firstname"
                                            id="customer_first_name"
                                            type="text"
                                            value={customerData.firstname}
                                            onChange={handleInputChange}
                                        /> :
                                        <p>{customerData.firstname}</p>
                                    }
                                    
                                </InputContainer>
                            </Grid>
                            <Grid item xs={12}>
                                <InputContainer>
                                    <h3>Sobrenome</h3>
                                    {
                                        editMode ?
                                        <input 
                                            name="lastname"
                                            id="customer_last_name"
                                            type="text"
                                            value={customerData.lastname}
                                            onChange={handleInputChange}
                                        /> :
                                        <p>{customerData.lastname}</p>
                                    }
                                </InputContainer>
                            </Grid>
                            <Grid item xs={12}>
                                <InputContainer>
                                    <h3>E-mail</h3>
                                    {
                                        editMode ?
                                        <input 
                                            name="email"
                                            id="customer_email"
                                            type="text"
                                            value={customerData.email}
                                            onChange={handleInputChange}
                                        /> :
                                        <p>{customerData.email}</p>
                                    }
                                </InputContainer>
                            </Grid>
                            <Grid item xs={12}>
                                <InputContainer>
                                    <h3>CPF</h3>
                                    {
                                        editMode ?
                                        <input 
                                            name="taxvat"
                                            id="customer_cpf"
                                            type="text"
                                            value={customerData.taxvat}
                                            onChange={handleInputChange}
                                        /> :
                                        <p>{customerData.taxvat}</p>
                                    }
                                </InputContainer>
                            </Grid>                            
                        </Hidden>
                    </Grid>
                    <EditButton editMode={editMode} onClick={() => { handleClickButton(editMode) }}>
                        <button>{ editMode ? "SALVAR" : "EDITAR"}</button>
                    </EditButton>
                </FormWrapper>

                <Snackbar open={snackOpen} autoHideDuration={3000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity={ responseMessage.status ? "success" : "error" }>
                        { responseMessage.message }
                    </Alert>
                </Snackbar>

            </PageWrapper>
        );

    return (
            <PageWrapper>
                <h1>Dados pessoais</h1>
            </PageWrapper>
    );
};

export default CustomerData;