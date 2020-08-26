import React, { useEffect, useState, useContext } from "react";
import { store } from "../../../store";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Grid, Typography } from "@material-ui/core";
import { AddressFormStyles, TitleStyles, EmailStyles } from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const ResetPassword = () => {
  const { state, dispatch } = useContext(store);
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const onSubmit = (data) => {
    dispatch({
      type: "EMAIL_REQUEST",
      email: data.email
    });
  };
  console.log(state, "state");

  return (
    <AddressFormStyles>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TitleStyles>
            <Typography variant="h6">Resetar Senha</Typography>
          </TitleStyles>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-mail</label>
            <EmailStyles>
            <input name="email" type="text" placeholder="marco@marco.com" ref={register({ required: true })} />
            <input type="submit" value="Continuar" />
            </EmailStyles>
            {errors.email && <p>E-mail obrigatório</p>}
          </form>
        </Grid>
      </Grid>
    </AddressFormStyles>
  );
};

export default ResetPassword;
