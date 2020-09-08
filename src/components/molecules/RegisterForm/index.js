import React, { useEffect, useState, useContext } from "react";
import { store } from "../../../store";
import { useForm } from "react-hook-form";
import NewUser from "../NewUser";
import {
  Grid,
  Typography,
  Link,
  Divider,
  Button,
  Hidden,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { AddressFormStyles, TitleStyles } from "./styles";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const RegisterForm = ({handleNext, emailIdentification}) => {
  const { state, dispatch } = useContext(store);
  const { register, handleSubmit } = useForm();
  const [ loginError, setLoginError ] = useState(null);
  const onSubmit = async(data) => {

    try{
      let loginResponse = await axios.post(`${API_URL}/customers/login`, { email: data.email, password: data.password });
      if(loginResponse && loginResponse.data && loginResponse.data.status == 200){
        localStorage.setItem("customer-token", loginResponse.data.token);
        localStorage.setItem("customer-email", data.email);
        handleNext();
      }
    }
    catch(error){
      setLoginError(error.response.data.message);
    }
  };

  const [isEmail, setIsEmail] = useState();
  const [logged, setLogged] = useState(false);
  const [newRegister, setNewRegister] = useState(!emailIdentification.isRegistered);
  const intialValues = {
    email: emailIdentification.email
  };

  useEffect(() => {
    setIsEmail(emailIdentification.isRegistered);
  }, []);
  return (
    <AddressFormStyles>
      <Grid container spacing={3}>
        {newRegister ? (
          <NewUser setNewRegister={setNewRegister} handleNext={handleNext} />
        ) : (
          <React.Fragment>
            <Grid item xs={12} sm={12}>
              {isEmail ? (
                <Alert severity="success">
                  Usuário já cadastrado. Digite a senha
                </Alert>
              ) : (
                <Alert severity="error">Usuário não cadastrado.</Alert>
              )}
              { loginError ? <Alert severity="error">{loginError}</Alert> : null }
            </Grid>
            <Hidden mdDown>
              <Grid item xs={5} sm={5}>
                <TitleStyles>
                  <Typography variant="h6">identificação</Typography>
                </TitleStyles>

                <Typography variant="p" component="p">
                  Para finalizar a compra, informe seu e-mail.
                </Typography>

                <Grid>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label htmlFor="email">E-mail</label>
                      <input
                        name="email"
                        defaultValue={intialValues.email}
                        ref={register}
                      />
                    </div>

                    <div>
                      <label htmlFor="password">Senha</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        ref={register}
                      />
                    </div>

                    <input type="submit" value="Enviar" />

                    <Link href="#">esqueci minha senha</Link>
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
                  <Typography variant="h6">cadastro</Typography>
                </TitleStyles>

                <Typography variant="p" component="p">
                  Criar a conta, com outro e-mail
                </Typography>

                <form>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => {
                      setNewRegister(true);
                    }}
                  >
                    Faça seu cadastro
                  </Button>
                </form>
              </Grid>
            </Hidden>

            <Hidden lgUp>
              <Grid item xs={12}>
                <TitleStyles>
                  <Typography variant="h6">identificação</Typography>
                </TitleStyles>

                <Typography variant="p" component="p">
                  Para finalizar a compra, informe seu e-mail.
                </Typography>

                <Grid>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label htmlFor="email">E-mail</label>
                      <input
                        name="email"
                        defaultValue={intialValues.email}
                        ref={register}
                      />
                    </div>

                    <div>
                      <label htmlFor="password">Senha</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        ref={register}
                      />
                    </div>

                    <input type="submit" value="Enviar" />

                    <Link href="#">esqueci minha senha</Link>
                  </form>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <TitleStyles>
                  <Typography variant="h6">cadastro</Typography>
                </TitleStyles>

                <Typography variant="p" component="p">
                  Criar nova conta, com outro e-mail
                </Typography>

                <form>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => {
                      setNewRegister(true);
                    }}
                  >
                    Faça seu cadastro
                  </Button>
                </form>
              </Grid>
            </Hidden>
          </React.Fragment>
        )}
      </Grid>
    </AddressFormStyles>
  );
};

export default RegisterForm;
