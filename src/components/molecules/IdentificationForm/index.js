import React, { useContext, useEffect } from "react";
import { store } from "../../../store";
import { useForm } from "react-hook-form";
import { Grid, Typography } from "@material-ui/core";
import { AddressFormStyles, TitleStyles, EmailStyles } from "./styles";

const IdentificationForm = ({ setEmailIdentification }) => {
  const { state, dispatch } = useContext(store);
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    setEmailIdentification(data.email);
    dispatch({
      type: "EMAIL_REQUEST",
      email: data.email,
    });
  };
  console.log(state, "state");

  return (
    <AddressFormStyles>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TitleStyles>
            <Typography variant="h6">identificação</Typography>
          </TitleStyles>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-mail</label>
            <EmailStyles>
              <input
                name="email"
                type="text"
                placeholder="marco@marco.com"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  },
                })}
              />
              {errors.email && errors.email.message}
              <input type="submit" value="Continuar" />
            </EmailStyles>
            {errors.email && <p>Insira um e-mail válido.</p>}
          </form>
        </Grid>
      </Grid>
    </AddressFormStyles>
  );
};

export default IdentificationForm;
