import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import {
    EditButton,
    PageWrapper,
    FormWrapper,
    InputContainer,
} from "./styles";

const CustomerData = ({}) => {
    const [ editMode, setEditMode ] = useState(false);
    return (
        <PageWrapper>
            <h1>Dados pessoais</h1>
            <FormWrapper>
                <Grid container>
                    <Grid item xs={4}>
                        <InputContainer>
                            <h3>Nome</h3>
                            {
                                editMode ?
                                <input 
                                    name="customer_first_name"
                                    id="customer_first_name"
                                    type="text"
                                    value={"Leo"}
                                /> :
                                <p>Leo</p>
                            }
                            
                        </InputContainer>
                    </Grid>
                    <Grid item xs={8}>
                        <InputContainer>
                            <h3>Sobrenome</h3>
                            {
                                editMode ?
                                <input 
                                    name="customer_last_name"
                                    id="customer_last_name"
                                    type="text"
                                    value={"Okumura"}
                                /> :
                                <p>Okumura</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={8}>
                        <InputContainer>
                            <h3>E-mail</h3>
                            {
                                editMode ?
                                <input 
                                    name="customer_email"
                                    id="customer_email"
                                    type="text"
                                    value={"leo.okumura@gmail.com"}
                                /> :
                                <p>leo.okumura@gmail.com</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={8}>
                        <InputContainer>
                            <h3>CPF</h3>
                            {
                                editMode ?
                                <input 
                                    name="customer_cpf"
                                    id="customer_cpf"
                                    type="text"
                                    value={"37946533861"}
                                /> :
                                <p>37946533861</p>
                            }
                        </InputContainer>
                    </Grid>
                </Grid>
            </FormWrapper>
            <EditButton onClick={() => {setEditMode(!editMode)}}>
                EDITAR
            </EditButton>
        </PageWrapper>
    );
};

export default CustomerData;