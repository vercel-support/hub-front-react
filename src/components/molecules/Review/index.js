import React, { useContext } from "react";
import { store } from "../../../store";
import { useForm } from "react-hook-form";
import { CardAddress } from "../../atoms"
import {
  Grid,
  Hidden,
} from "@material-ui/core";
import { ReviewStyles, ReviewCepStyles, TitleStyles } from "./styles";

const Review = () => {
  const { state, dispatch } = useContext(store);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const token = localStorage.getItem("app-token");
    console.log(token, "token");
    dispatch({
      type: "NEWADDRESS_REQUEST",
      newAddress: {
        "token": `${token}`,
        "postalCode": data.postalCode,
        "street": data.street,
        "number": data.number,
        "neighborhood": data.neighborhood,
        "phone": data.phone,
        "firstName": data.firstName,
        "lastName": data.lastName,
        "defaultBilling": true,
      },
    });
  };

  console.log(state, "state")

  return (
    <ReviewStyles>
      <Grid container spacing={3}>
        {state && state.user.address && <CardAddress address={state && state.user.address} />}

        <Grid xs={12} sm={12}>
          <TitleStyles>novo endereço</TitleStyles>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={12}>
            <label htmlFor="CEP">CEP</label>
            <ReviewCepStyles>
              <input type="text" name="postalCode" ref={register} />
            </ReviewCepStyles>
          </Grid>
          <Grid xs={12} sm={8}>
            <label htmlFor="street">Rua</label>
            <input type="text" name="street" ref={register}></input>
          </Grid>

          <Grid xs={6} sm={4}>
            <label htmlFor="number">Número</label>
            <input type="text" name="numero" ref={register}></input>
          </Grid>

          <Hidden only={["lg", "sm"]}>
            <Grid xs={6}>
              <label htmlFor="neighborhood">Bairro</label>
              <input type="text" name="bairro" ref={register}></input>
            </Grid>
          </Hidden>

          <Grid xs={12} sm={8}>
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento" ref={register}></input>
          </Grid>

          <Hidden only="xs">
            <Grid xs={12} sm={4}>
              <label htmlFor="neighborhood">Bairro</label>
              <input type="text" name="bairro" ref={register}></input>
            </Grid>
          </Hidden>

          <Grid xs={6} sm={8}>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" ref={register}></input>
          </Grid>
          <Grid xs={6} sm={4}>
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" ref={register}></input>
          </Grid>
          <Grid xs={12} sm={6}>
            <label htmlFor="destinatario">Nome do destinatário</label>
            <input type="text" name="firstName" ref={register}></input>
            <p>Nome de quem retira ou recebe o pedido</p>
          </Grid>
          <Grid xs={12} sm={6}>
            <label htmlFor="tel">Telefone</label>
            <input type="text" name="phone" ref={register}></input>
          </Grid>
        </Grid>

        <Grid container spacing={3} justify="flex-end">
          <Grid xs={12} sm={6} className="submit" className="button">
            <input type="submit" value="cadastrar endereço" />
          </Grid>
        </Grid>
      </form>
    </ReviewStyles>
  );
};

export default Review;
