import React, { useEffect, useState, useContext } from "react";
import { store } from "../../../store";
import { IdentificationForm, RegisterForm, NewAddressForm, AddressForm } from "../../molecules";

// import { Container } from './styles';

const Login = ({handleNext}) => {
  const { state } = useContext(store);
  const [onEmail, setOnEmail] = useState(false);

  useEffect(() => {
    setOnEmail(state.login.onLogin);
  }, [state]);
  
  return (
    <React.Fragment>
      {onEmail ? <RegisterForm handleNext={handleNext} />:<IdentificationForm />}
    </React.Fragment>
  );
};

export default Login;
