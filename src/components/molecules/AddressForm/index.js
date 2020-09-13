import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { AddressFormStyles, TitleStyles } from "./styles";


import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const AddressForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        `${API_URL}/customers/isEmailAvailable`, {"email":data.email}
      )
      .then(({ data }) => console.log(data));
  };

  return (
    <AddressFormStyles>
      <Grid container spacing={3}>
        
        <Grid item xs={5} sm={5}>
          <TitleStyles>
            <AccountCircleIcon />
            <Typography variant="h6">Identificação</Typography>
          </TitleStyles>

          <Typography variant="p" component="p">
            Para finalizar a compra, informe seu e-mail.
          </Typography>

          <Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">email</label>
                <input
                  name="email"
                  ref={register}
                />
              </div>

              <div>
                <label htmlFor="password">senha</label>
                <input
                  name="pwd"
                  placeholder="Digite sua senha"
                  ref={register}
                />
              </div>

              <input type="submit" value="Enviar" />
              <a href="https://www.geracaopet.com.br/customer/account/forgotpassword/">esqueci minha senha</a>
              {/* <Link href={`/[...page]`} as="/customer/account/forgotpassword/">esqueci minha senha</Link> */}
            </form>
          </Grid>
        </Grid>

        <Grid item xs={1} sm={1} className="divider">
          <Divider
            variant="middle"
            flexItem
            orientation="vertical"
            style={{ height: "100%" }}
          />
        </Grid>

        <Grid item xs={5} sm={5}>
          <TitleStyles>
            <AccountCircleIcon />
            <Typography variant="h6">Cadastro</Typography>
          </TitleStyles>

          <Typography variant="p" component="p">
            Criar nova conta, com outro e-mail
          </Typography>

          <form>
            <input type="submit" value="Faça seu Cadastro" />
          </form>
        </Grid>
      </Grid>
    </AddressFormStyles>
  );
};

export default AddressForm;
