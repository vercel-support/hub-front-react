import React, { useState } from "react";
import { Grid, Card } from "@material-ui/core";
import {
    DeleteIconStyled,
    EditButtonsContainer,
    EditIconStyled,
    FormWrapper,
    InputContainer,
    NewAddressButton,
    NewIconStyled,
    PageWrapper,
    SaveButton,
} from "./styles";

const CustomerAddresses = ({desktop}) => {
    const [ editMode, setEditMode ] = useState(false);
    return (
        <PageWrapper>
            <h1>Meus endereços</h1>
            <NewAddressButton>
                <NewIconStyled />
                NOVO ENDEREÇO
            </NewAddressButton>
            <Card>
                <FormWrapper>
                    <EditButtonsContainer>
                        <Grid container>
                            <Grid item xs={6}>
                                <EditIconStyled onClick={() => {setEditMode(true)}}/>
                            </Grid>
                            <Grid item xs={6}>
                                <DeleteIconStyled />
                            </Grid>
                        </Grid>
                    </EditButtonsContainer>

                    <Grid container>
                        <Grid item xs={ 12 }>
                            <InputContainer>
                                <h3>CEP</h3>
                                {
                                    editMode ?
                                    <input 
                                        name="1_postal_code"
                                        id="1_postal_code"
                                        type="text"
                                        value={"18048-000"}
                                    /> :
                                    <p>180480-000</p>
                                }
                            </InputContainer>
                        </Grid>
                        <Grid item xs={ desktop ? 6 : 10 }>
                            <InputContainer>
                                <h3>Rua</h3>
                                {
                                    editMode ?
                                    <input 
                                        name="1_street"
                                        id="1_street"
                                        type="text"
                                        value={"Rua Almirante Giachetta"}
                                    /> :
                                    <p>Rua Almirante Giachetta</p>
                                }
                            </InputContainer>
                        </Grid>
                        <Grid item xs={ desktop ? 6 : 2 }>
                            <InputContainer>
                                <h3>Número</h3>
                                {
                                    editMode ?
                                    <input 
                                        name="1_street_number"
                                        id="1_street_number"
                                        type="text"
                                        value={"143"}
                                    /> :
                                    <p>143</p>
                                }
                            </InputContainer>
                        </Grid>
                        <Grid item xs={ desktop ? 6 : 10 }>
                            <InputContainer>
                                <h3>Complemento</h3>
                                {
                                    editMode ?
                                    <input 
                                        name="1_complement"
                                        id="1_complement"
                                        type="text"
                                        value={"Apartamento 62 Bloco B"}
                                    /> :
                                    <p>Apartamento 62 Bloco B</p>
                                }
                            </InputContainer>
                        </Grid>
                        <Grid item xs={ desktop ? 6 : 2 }>
                            <InputContainer>
                                <h3>Bairro</h3>
                                {
                                    editMode ?
                                    <input 
                                        name="1_neighborhood"
                                        id="1_neighborhood"
                                        type="text"
                                        value={"Parque Campolim"}
                                    /> :
                                    <p>Parque Campolim</p>
                                }
                            </InputContainer>
                        </Grid>
                    </Grid>
                </FormWrapper>
                {
                    editMode && (
                        <SaveButton>
                            SALVAR
                        </SaveButton>
                    )
                }
            </Card>
        </PageWrapper>
    );
};

export default CustomerAddresses;