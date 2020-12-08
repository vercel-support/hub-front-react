import React, { useContext, useState } from "react";
import { CardAddress, InputAlternative, Pickup } from "../../atoms";
import { store } from "../../../store";
import { useForm } from "react-hook-form";
import { Grid, Typography } from "@material-ui/core";
import { AddressFormStyles, TitleStyles } from "./styles";

/*import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig; */
const API_URL = process.env.API_URL;
import axios from "axios";

const NewUser = ({ setNewRegister, handleNext }) => {
  const { state, dispatch } = useContext(store);
  const { register, handleSubmit, watch } = useForm();
  const [error, setError] = useState(null);
  const onSubmit = async (data) => {
    dispatch({ type: "LOADING_DATA", payload: true });
    try {
      let serviceResponse = await axios.post(`${API_URL}/customers/register`, {
        email: data.email,
        firstname: data.firstName,
        lastname: data.lastName,
        cpf: data.cpf,
        password: data.password,
      });

      if (
        serviceResponse &&
        serviceResponse.data &&
        serviceResponse.status === 201
      ) {
        let loginResponse = await axios.post(`${API_URL}/customers/login`, {
          email: data.email,
          password: data.password,
        });
        if (
          loginResponse &&
          loginResponse.data &&
          loginResponse.data.status == 200
        ) {
          localStorage.setItem("customer-token", loginResponse.data.token);
          localStorage.setItem("customer-email", data.email);
        }
        handleNext();
      }
      dispatch({ type: "LOADING_DATA", payload: false });
    } catch (error) {
      if (error.response.data) {
        dispatch({ type: "LOADING_DATA", payload: false });
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
            <label htmlFor="email">E-mail*</label>
            <InputAlternative config={{type:"text", name:"email", message: "Este é um campo obrigatório.",}} ref={register({ required: true })} />
          </Grid>

          <Grid xs={6} sm={6}>
            <label htmlFor="firstName">Nome*</label>
            <InputAlternative config={{type:"text", name:"firstName", message: "Este é um campo obrigatório.",}} ref={register({ required: true })} />
          </Grid>

          <Grid xs={6} sm={6}>
            <label htmlFor="lastName">Sobrenome*</label>
            <InputAlternative config={{type:"text", name:"lastName", message: "Este é um campo obrigatório.",}} ref={register({ required: true })} />
          </Grid>

          <Grid xs={12} sm={12}>
            <label htmlFor="cpf">CPF*</label>
            <InputAlternative
              ref={register({ required: true })}
              mask="maskCpfCnpj"
              config={{
                type:"text",
                name:"cpf",
                id:"cpf",
                message: "Este é um campo obrigatório.",
              }}
            />
          </Grid>

          <Grid xs={12} sm={12}>
            <label htmlFor="password">Senha*</label>
            <InputAlternative config={{type:"password", name:"password", message: "Este é um campo obrigatório.",}} ref={register({ required: true })} />
          </Grid>
        </Grid>
        {error && <p>{error}</p>}
        <Grid container spacing={3} justify="flex-end">
          <Grid xs={12} sm={6} className="submit">
            <InputAlternative config={{type:"submit", value:"Cadastrar"}} />
          </Grid>
        </Grid>
      </form>
    </AddressFormStyles>
  );
};

export default NewUser;
