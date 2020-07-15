import React from "react";
import { Container, Grid } from "@material-ui/core";

const Content = ({ children }) => (
  <main>
    <Container>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Container>
  </main>
);

export default Content;
