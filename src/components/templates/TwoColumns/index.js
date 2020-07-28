import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Footer, Header } from "../../organisms";

const TwoColumns = ({
  beforeContent = null,
  children,
  content = null,
  left = null,
}) => (
  <Grid container direction="column" justify="space-between">
    <Grid item xs={12}>
      <Header content={content} />
    </Grid>
    <Grid item>
      <main>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              {beforeContent}
            </Grid>
            <Grid item xs={12} lg={2}>
              {left}
            </Grid>
            <Grid item xs={12} lg={10}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
    </Grid>
    <Grid item>
      <Footer />
    </Grid>
  </Grid>
);

export default TwoColumns;
