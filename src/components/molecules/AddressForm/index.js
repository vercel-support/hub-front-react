import React from "react";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {AddressFormStyles} from './styles'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const AddressForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <AddressFormStyles>

      <Grid className="d-flex">
        <AccountCircleIcon />
        <Typography variant="h6" gutterBottom>
          Identificação
        </Typography>
      </Grid>

      <Typography variant="p" component="p">
        Para finalizar a compra, informe seu e-mail.                    
      </Typography>      

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>e-mail</label>
            <input
              type="email"
              name="First name"
              ref={register({ required: true })}
            />                    

            <button type="submit">Continuar</button>
          </form>
        </Grid>
      </Grid>
    </AddressFormStyles>
  );
}

export default AddressForm;