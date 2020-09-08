import React, { useContext, useState } from "react";
import { store } from "../../../store";
import { useForm } from "react-hook-form";
import { Grid, Typography } from "@material-ui/core";
import { AddressFormStyles, TitleStyles } from "./styles";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const NewUser = ({ setNewRegister, handleNext }) => {
  const { state, dispatch } = useContext(store);
  const { register, handleSubmit, watch } = useForm();
  const [error, setError] = useState(null);
  const onSubmit = async(data) => {
    try{
      let serviceResponse = await axios.post(`${API_URL}/customers/register`, {
        "email": data.email,
        "firstname": data.firstName,
        "lastname": data.lastName,
        "cpf": data.cpf,
        "password": data.password
      });
  
      if(serviceResponse && serviceResponse.data && serviceResponse.status === 201){
        let loginResponse = await axios.post(`${API_URL}/customers/login`, { email: data.email, password: data.password });
        if(loginResponse && loginResponse.data && loginResponse.data.status == 200){
          localStorage.setItem("customer-token", loginResponse.data.token);
          localStorage.setItem("customer-email", data.email);
        }
        handleNext();
      }
    }
    catch(error){
      if(error.response.data){
        setError(error.response.data.message);
      }
    }
  };

  return (
    <AddressFormStyles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <TitleStyles>
            <Typography variant="h6">novo cadastro</Typography>
          </TitleStyles>

          <Grid xs={12} sm={12}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" ref={register}></input>
          </Grid>

          <Grid xs={6} sm={6}>
            <label htmlFor="firstName">Nome</label>
            <input type="text" name="firstName" ref={register}></input>
          </Grid>

          <Grid xs={6} sm={6}>
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" name="lastName" ref={register}></input>
          </Grid>

          <Grid xs={12} sm={12}>
            <label htmlFor="cpf">CPF</label>
            <input type="text" name="cpf" ref={register}></input>
          </Grid>

          <Grid xs={12} sm={12}>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" ref={register}></input>
          </Grid>
        </Grid>
        {error && <p>{error}</p>}
        <Grid container spacing={3} justify="flex-end">
          <Grid xs={12} sm={6} className="submit">
            <input type="submit" value="Cadastrar Endereço" />
          </Grid>
        </Grid>
      </form>
    </AddressFormStyles>
  );
};

export default NewUser;
