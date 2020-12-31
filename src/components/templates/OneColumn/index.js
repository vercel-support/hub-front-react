import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Breadcrumbs } from "../../molecules";
import { Footer, Header } from "../../organisms";
import { RewardsBar } from "../../atoms";

const OneColumn = ({ children, content }) => (
  <Grid container direction="column" justify="space-between">
    <Grid item>
      <Header content={content} />
      <RewardsBar />
    </Grid>
    <Grid item>
      <main>
        <Container>
          <Grid container spacing={4}>
            {content?.data?.breadcrumbs?.length && (
              <Grid item xs={12}>
                <Breadcrumbs items={content.data.breadcrumbs} />
              </Grid>
            )}
            {children}
          </Grid>
        </Container>
      </main>
    </Grid>
    <Grid item>
      <Footer />
    </Grid>
  </Grid>
);

export default OneColumn;