import React, { useContext, useEffect } from "react";
import { store } from "../../../store";
import { useForm } from "react-hook-form";
import { CardAddress, InputAlternative } from "../../atoms";
import ValidationAddress from "../ValidationAddress";
import Shipping from "../Shipping";
import { Grid, Hidden } from "@material-ui/core";
import { ReviewStyles, TitleStyles } from "./styles";

const Review = ({ handleNext, shipping, total }) => {
  const { state, dispatch } = useContext(store);
  const [validationCep, setValidationCep] = React.useState(false);
  const {
    handleSubmit,
    register,
    errors,
    setError,
    setValue,
    watch,
    getValues,
  } = useForm({ mode: "onBlur" });

  const cep = watch("zip", 0);
  const hasZipLength = cep.toString().length === 9;

  const requestAddress = async (cep) => {
    try {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await fetch(url);
      const address = await response.json();
      setValue("street", address.logradouro);
      setValue("neighborhood", address.bairro);
      setValue("cidade", address.localidade);
      setValue("estado", address.uf);
      return address;
    } catch (error) {
      err;
    }
  };

  const onSubmit = (data) => {
    debugger;
    const token = localStorage.getItem("app-token");

    dispatch({
      type: "NEWADDRESS_REQUEST",
      newAddress: {
        token: `${token}`,
        postalCode: data.zip,
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        phone: data.telephone,
        firstName: data.firstname,
        lastName: data.lastname,
        defaultBilling: true,
      },
    });
  };

  const FunValidationCep = (cepCad) => {
    if ("05386-120" === cepCad) {
      handleNext();
    } else setValidationCep(true);
  };
  useEffect(() => {
    if (hasZipLength) requestAddress(cep);
  }, [cep, setValue]);

  return (
    <ReviewStyles>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12}>
          <TitleStyles>receber em casa</TitleStyles>
        </Grid>
        <Grid xs={12}>
          <Shipping shipping={shipping.shippingOptions} />
        </Grid>
        {state && state.user.address && (
          <CardAddress
            validationCep={FunValidationCep}
            address={state && state.user.address}
            handleNext={handleNext}
          />
        )}

        <Grid xs={12}>{validationCep && <ValidationAddress />}</Grid>

        <Grid xs={12} sm={12}>
          <TitleStyles>novo endereço</TitleStyles>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={8}>
            <label htmlFor="CEP">CEP*</label>
            <InputAlternative
              ref={register({ required: true, minLength: 9 })}
              invert={true}
              mask="maskCep"
              qa="account_input_cep"
              width={50}
              config={{
                type: "text",
                id: "zip",
                name: "zip",
                placeholder: "Digite apenas números",
                error: errors.zip,
                message:
                  errors.zip && errors.zip.types && errors.zip.types.notFound
                    ? "CEP não encontrado"
                    : "Este é um campo obrigatório.",
              }}
            />
          </Grid>
          <Grid xs={12} sm={8}>
            <label htmlFor="street">Rua*</label>
            <InputAlternative
              ref={register({ required: true })}
              invert={true}
              width={100}
              config={{
                type: "text",
                id: "street",
                name: "street",
                error: errors.street,
                message: "Este é um campo obrigatório.",
              }}
            />
          </Grid>

          <Grid xs={6} sm={4}>
            <label htmlFor="number">Número*</label>
            <InputAlternative
              ref={register({ required: true })}
              invert={true}
              width={100}
              config={{
                type: "text",
                id: "number",
                name: "number",
                error: errors.number,
                message: "Este é um campo obrigatório.",
              }}
            />
          </Grid>

          <Hidden only={["lg", "sm"]}>
            <Grid xs={6}>
              <label htmlFor="neighborhood">Bairro*</label>
              <InputAlternative
                ref={register({ required: true })}
                invert={true}
                width={100}
                config={{
                  type: "text",
                  id: "neighborhood",
                  name: "neighborhood",
                  error: errors.neighborhood,
                  message: "Este é um campo obrigatório.",
                }}
              />
            </Grid>
          </Hidden>

          <Grid xs={12} sm={8}>
            <label htmlFor="complemento">Complemento</label>
            <InputAlternative
              ref={register}
              invert={true}
              width={100}
              config={{
                type: "text",
                id: "complemento",
                name: "complemento",
                error: errors.complemento,
                message: "Este é um campo obrigatório.",
              }}
            />
          </Grid>

          <Hidden only="xs">
            <Grid xs={12} sm={4}>
              <label htmlFor="neighborhood">Bairro*</label>
              <InputAlternative
                ref={register({ required: true })}
                invert={true}
                width={100}
                config={{
                  type: "text",
                  id: "neighborhood",
                  name: "neighborhood",
                  error: errors.neighborhood,
                  message: "Este é um campo obrigatório.",
                }}
              />
            </Grid>
          </Hidden>

          <Grid xs={6} sm={8}>
            <label htmlFor="cidade">Cidade*</label>
            <InputAlternative
              ref={register({ required: true })}
              invert={true}
              width={100}
              config={{
                type: "text",
                id: "cidade",
                name: "cidade",
                error: errors.cidade,
                message: "Este é um campo obrigatório.",
              }}
            />
          </Grid>
          <Grid xs={6} sm={4}>
            <label htmlFor="estado">Estado*</label>
            <InputAlternative
              ref={register({ required: true })}
              invert={true}
              width={100}
              config={{
                type: "text",
                id: "estado",
                name: "estado",
                error: errors.estado,
                message: "Este é um campo obrigatório.",
              }}
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <label htmlFor="firstname">Nome*</label>
            <InputAlternative
              ref={register({ required: true })}
              invert={true}
              mask="maskName"
              config={{
                type: "text",
                id: "firstname",
                name: "firstname",
                error: errors.firstname,
                message: "Entre com um nome válido",
              }}
            />
          </Grid>
          <Grid xs={12} sm={5}>
            <label htmlFor="lastname">Sobrenome*</label>
            <InputAlternative
              ref={register({ required: true })}
              invert={true}
              mask="maskName"
              qa="account_input_lastname"
              config={{
                type: "text",
                id: "lastname",
                name: "lastname",
                error: errors.lastname,
                message: "Entre com um nome válido",
              }}
            />
          </Grid>
          <Grid xs={12} sm={3}>
            <label htmlFor="tel">Telefone</label>
            <InputAlternative
              ref={register}
              mask="maskTelCel"
              config={{
                type: "text",
                id: "telephone",
                name: "telephone",
                placeholder: "DDD + Telefone",
                error: errors.telephone,
                message: "Este é um campo obrigatório.",
              }}
            />
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
