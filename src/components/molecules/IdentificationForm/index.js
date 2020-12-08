import React, { useContext, useEffect } from "react";
import { store } from "../../../store";
import { useForm } from "react-hook-form";
import { Grid, Typography } from "@material-ui/core";
import { AddressFormStyles, TitleStyles, EmailStyles } from "./styles";

/*import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig; */
const API_URL = process.env.API_URL;
import axios from "axios";

const IdentificationForm = ({ setEmailIdentification }) => {
  const { state, dispatch } = useContext(store);
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async(data) => {
    dispatch({ type: "LOADING_DATA", payload: true });  
    try{
      let serviceResponse = await axios.post(`${API_URL}/customers/isEmailAvailable`, { email: data.email });
      if(serviceResponse && serviceResponse.data && serviceResponse.status === 200){
        setEmailIdentification({
          email: data.email,
          isRegistered: serviceResponse.data.isAvailable
        });
      }
      dispatch({ type: "LOADING_DATA", payload: false }); 
    }
    catch(error){
      dispatch({ type: "LOADING_DATA", payload: false }); 
    }

  };

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
