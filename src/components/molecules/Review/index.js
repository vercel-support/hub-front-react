import React from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  Hidden,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { ReviewStyles, ReviewCepStyles, TitleStyles } from "./styles";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ReviewStyles>
      <Grid xs={12} sm={12}>
        <TitleStyles>
          <RoomIcon />
          <Typography variant="h6">Endereços Cadastrados</Typography>
        </TitleStyles>
      </Grid>

      <Grid xs={12} sm={12} className="endCard">
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Marcos Domingues
            </Typography>
            <Typography variant="body2" component="p">
              Rua Fernandes Camacho, 160 - Casa 55 - Jardim Alvorada -
              Sorocaba/SP CEP: 18080-430
            </Typography>
          </CardContent>
          <CardActions>
            <input type="submit" value="Entregar nesse endereço" />
          </CardActions>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Marcos Domingues
            </Typography>
            <Typography variant="body2" component="p">
              Rua Fernandes Camacho, 160 - Casa 55 - Jardim Alvorada -
              Sorocaba/SP CEP: 18080-430
            </Typography>
          </CardContent>
          <CardActions>
            <input type="submit" value="Entregar nesse endereço" />
          </CardActions>
        </Card>
      </Grid>

      <Grid xs={12} sm={12}>
        <TitleStyles>
          <RoomIcon />
          <Typography variant="h6">Novo Endereço</Typography>
        </TitleStyles>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={12}>
            <label htmlFor="CEP">CEP</label>
            <ReviewCepStyles>
              <input type="text" name="cep" ref={register} />
              <input type="button" value="OK" />
            </ReviewCepStyles>
          </Grid>
          <Grid xs={12} sm={8}>
            <label htmlFor="rua">Rua</label>
            <input type="text" name="rua" ref={register}></input>
          </Grid>

          <Grid xs={6} sm={4}>
            <label htmlFor="numero">Número</label>
            <input type="text" name="numero" ref={register}></input>
          </Grid>

          <Hidden only={["lg", "sm"]}>
            <Grid xs={6}>
              <label htmlFor="bairro">Bairro</label>
              <input type="text" name="bairro" ref={register}></input>
            </Grid>
          </Hidden>

          <Grid xs={12} sm={8}>
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento" ref={register}></input>
          </Grid>

          <Hidden only="xs">
            <Grid xs={12} sm={4}>
              <label htmlFor="bairro">Bairro</label>
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
            <input type="text" name="destinatario" ref={register}></input>
            <p>Nome de quem retira ou recebe o pedido</p>
          </Grid>
          <Grid xs={12} sm={6}>
            <label htmlFor="tel">Telefone</label>
            <input type="text" name="tel" ref={register}></input>
          </Grid>
          <Grid xs={12} sm={12} className="submit">
            <input type="submit" value="Entregar nesse Endereço" />
          </Grid>
        </Grid>
      </form>
    </ReviewStyles>
  );
};

export default Review;
