import React, { useContext } from "react";
import { store } from "../../../store";
import { useForm } from "react-hook-form";
import { Grid, Typography } from "@material-ui/core";
import { AddressFormStyles, TitleStyles } from "./styles";

const NewUser = ({ setNewRegister, handleNext }) => {
  const { state, dispatch } = useContext(store);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    dispatch({
      type: "REGISTERUSER_REQUEST",
      register: {
        "email": data.email,
        "firstname": data.firstName,
        "lastname": data.lastName,
        "cpf": data.cpf,
        "password": data.password,
      },
      handleNext: handleNext,
    });
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
