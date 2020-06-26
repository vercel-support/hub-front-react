import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Footer, Header } from "../../organisms";

const OneColumn = ({ children }) => {
  return (
    <Container>
      <Grid container direction="column" justify="space-between">
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <main>{children}</main>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default OneColumn;
