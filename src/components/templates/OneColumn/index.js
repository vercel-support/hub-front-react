import React from "react";
import { Grid } from "@material-ui/core";
import { Content, Footer, Header } from "../../organisms";

const OneColumn = ({ children, content }) => {
  return (
    <Grid container direction="column" justify="space-between">
      <Grid item>
        <Header content={content} />
      </Grid>
      <Grid item>
        <Content>{children}</Content>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default OneColumn;
