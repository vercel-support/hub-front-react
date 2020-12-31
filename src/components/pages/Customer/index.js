import React, { useContext, useState, useEffect } from "react";
import { store } from "../../../store";
import { OneColumn } from "../../templates";
import { Grid, Hidden } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Customer = ({ content, page }) => {

  const Page = page !== "index" ? routes[page] : routes["customerData"];

  const { dispatch } = useContext(store);
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ customerData, setCustomerData ] = useState(null);
  const [ emailIdentification, setEmailIdentification ] = useState({
    email: null,
    isRegistered: false
  });
  const [ loading, setLoading ] = useState(false);
  const classes = useStyles();

  const getCustomerData = async(token, savedEmail) => {
    try{
      setLoading(true);
      let loginResponse = await axios.post(`${API_URL}/customers`, { token });
      if(loginResponse && loginResponse.data && loginResponse.data.status == 200){
        setCustomerData(loginResponse.data.customerData);
        setLoggedIn(true);
        dispatch({ 
          type: "SET_USER_LOGGED_IN", 
          payload: { token, customerData: loginResponse.data.customerData } 
        });
      }
      else{
        setEmailIdentification({
          email: savedEmail,
          isRegistered: true
        });
      }
      setLoading(false);
    }
    catch(error){
      setEmailIdentification({
        email: savedEmail,
        isRegistered: true
      });
      setLoading(false);
    }
  }

  const tryLogin = async() => {
    setLoading(true);
    const savedEmail = localStorage.getItem("customer-email");
    if(savedEmail){
      const savedToken = localStorage.getItem("customer-token");
      if(savedToken){
        await getCustomerData(savedToken, savedEmail);
      }
      else{
        setEmailIdentification({
          email: savedEmail,
          isRegistered: true
        });
      }
    }
    setLoading(false);
  };

  const handleLogin = (data) => {
    setLoggedIn(true);
    getCustomerData(data.token);
  }

  useEffect(() => {
    tryLogin();
  }, []);

  if(loading)
    return (
      <OneColumn content={content}>
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </OneColumn>
    );

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
            <CustomerMenu content={customerData}/>
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
              <CustomerMenuMobile content={customerData}/>
            )
          }
        {Page && page !== "index" && (<Page desktop={false}/>)}
      </Hidden>
      
    </OneColumn>
  );
};

export default Customer;
