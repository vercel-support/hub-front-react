import React from "react";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {AddressFormStyles} from './styles'

const AddressForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <AddressFormStyles>
      <Typography variant="h6" gutterBottom>
        Identificação
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="example" defaultValue="Nome" ref={register} />

            <input name="exampleRequired" ref={register({ required: true })} />

            <input type="submit" />
          </form>
        </Grid>
      </Grid>
    </AddressFormStyles>
  );
}

export default AddressForm;