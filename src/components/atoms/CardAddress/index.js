import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

import { CardAddressStyles, TitleStyles } from "./styles";

const CardAddress = ({ address, handleNext }) => {
  return (
    <React.Fragment>
      {address.length === 0 ? null : (
        <React.Fragment>
          <Grid xs={12} sm={12}>
            <TitleStyles>endereços cadastrados</TitleStyles>
          </Grid>

          {address.map((item) => (
            <Grid xs={12} sm={4} className="endCard">
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.firstname} {item.lastname}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.street}, {item.number}
                    {item.complement && -item.complement}- {item.neighborhood} -
                    {item.city}/{item.region} CEP: {item.postalCode}
                  </Typography>
                </CardContent>
                <CardActions>
                  <input type="submit" value="Entregar nesse endereço" onClick={handleNext} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CardAddress;
