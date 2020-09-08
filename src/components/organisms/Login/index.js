import React, { useEffect, useState, useContext } from "react";
import { store } from "../../../store";
import { IdentificationForm, RegisterForm, NewAddressForm, AddressForm } from "../../molecules";

// import { Container } from './styles';

const Login = ({handleNext}) => {
  const [emailIdentification, setEmailIdentification] = useState({
    email: null,
    isRegistered: false
  });
  
  return (
    <React.Fragment>
      {emailIdentification.email ? <RegisterForm handleNext={handleNext} emailIdentification={emailIdentification} />:<IdentificationForm setEmailIdentification={setEmailIdentification} />}
    </React.Fragment>
  );
};

export default Login;
