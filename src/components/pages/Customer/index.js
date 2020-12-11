import React, { useState, useEffect } from "react";
import { OneColumn } from "../../templates";
import { Grid, Hidden } from "@material-ui/core";
import {
  CustomerMenu,
  CustomerMenuMobile,
} from "../../molecules";
import {
  AdressesIcon,
  BackContainer,
  RegisterFormContainer,
} from "./styles";
import { IdentificationForm, RegisterForm } from "../../molecules";
import routes from "../../../utils/switchComponentes";
import Link from "next/link";
const API_URL = process.env.API_URL;
import axios from "axios";

const Customer = ({ content, page }) => {
  const Page = page !== "index" ? routes[page] : null;
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ emailIdentification, setEmailIdentification ] = useState({
    email: null,
    isRegistered: false
  });

  const tryLogin = async() => {
    const savedEmail = localStorage.getItem("customer-email");
    if(savedEmail){
      const savedToken = localStorage.getItem("customer-token");
      if(savedToken){
        try{
          let loginResponse = await axios.post(`${API_URL}/customers`, { token: savedToken });
          if(loginResponse && loginResponse.data && loginResponse.data.status == 200){
            console.log(loginResponse.data);
            handleLogin();
          }
          else{
            setEmailIdentification({
              email: savedEmail,
              isRegistered: true
            });
          }
        }
        catch(error){
          setEmailIdentification({
            email: savedEmail,
            isRegistered: true
          });
        }

      }
      else{
        setEmailIdentification({
          email: savedEmail,
          isRegistered: true
        });
      }
    }
  };

  const handleLogin = (data) => {
    setLoggedIn(true);
    console.log('loggedin');
    console.log(data);
  }

  useEffect(() => {
    tryLogin();
  }, []);

  if(!loggedIn)
    return (
      <OneColumn content={content}>

          <Grid container alignContent="center">
            <Hidden mdDown>
              <Grid item xs={12}>
                  {emailIdentification.email ? <RegisterForm handleNext={handleLogin} emailIdentification={emailIdentification} />:<IdentificationForm setEmailIdentification={setEmailIdentification} />}
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={12}>
                  {emailIdentification.email ? <RegisterForm handleNext={handleLogin} emailIdentification={emailIdentification} />:<IdentificationForm setEmailIdentification={setEmailIdentification} />}
              </Grid>
            </Hidden>
          </Grid>



      </OneColumn>
    );

  return (
    <OneColumn content={content}>
      <Hidden mdDown>
        <Grid container>
          <Grid item lg={3}>
            <CustomerMenu />
          </Grid>
          <Grid item lg={9}>
            {Page && (<Page desktop={true}/>)}
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
          {
            page !== "index" ? (
              <Grid item lg={12}>
                <Link href={`/minha-conta`}>
                  <BackContainer>
                    <AdressesIcon /> VOLTAR
                  </BackContainer>
                </Link>
              </Grid>
            ) :
            (
              <CustomerMenuMobile />
            )
          }
        {Page && (<Page desktop={false}/>)}
      </Hidden>
      
    </OneColumn>
  );
};

export default Customer;
