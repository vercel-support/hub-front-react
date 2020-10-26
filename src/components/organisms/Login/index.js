import React, { useEffect, useState } from "react";
import { IdentificationForm, RegisterForm, NewAddressForm, AddressForm } from "../../molecules";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Login = ({handleNext}) => {
  const [ loading, setLoading ] = useState(false);
  const [ emailIdentification, setEmailIdentification ] = useState({
    email: null,
    isRegistered: false
  });
  const classes = useStyles();

  const tryLogin = async() => {
    setLoading(true);
    const savedEmail = localStorage.getItem("customer-email");
    if(savedEmail){
      const savedToken = localStorage.getItem("customer-token");
      if(savedToken){
        try{
          let loginResponse = await axios.post(`${API_URL}/customers`, { token: savedToken });
          if(loginResponse && loginResponse.data && loginResponse.data.status == 200){
            setLoading(false);
            handleNext();
          }
          else{
            setLoading(false);
            setEmailIdentification({
              email: savedEmail,
              isRegistered: true
            });
          }
        }
        catch(error){
          setLoading(false);
          setEmailIdentification({
            email: savedEmail,
            isRegistered: true
          });
        }

      }
      else{
        setLoading(false);
        setEmailIdentification({
          email: savedEmail,
          isRegistered: true
        });
      }
    }

    setLoading(false);
  };

  useEffect(() => {
      tryLogin();
  }, []);
  
  if(loading)
    return (
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  return (
    <React.Fragment>
      {emailIdentification.email ? <RegisterForm handleNext={handleNext} emailIdentification={emailIdentification} />:<IdentificationForm setEmailIdentification={setEmailIdentification} />}
    </React.Fragment>
  );
};

export default Login;
