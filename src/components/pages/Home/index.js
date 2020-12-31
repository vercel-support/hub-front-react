import React from "react";
import Divider from '@material-ui/core/Divider';
import { Footer, Header } from "../../organisms";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { BannerSlider } from "../../molecules";
import { Features } from "../../molecules";
import { Brands } from "../../molecules";
import { HighlightCategories } from "../../molecules";
import { MainContent } from "./styles";
import { RewardsBar } from "../../atoms";

const Home = ({ content }) => (
  <Grid container direction="column" justify="space-between">
    <Grid item>
      <Header content={content} />
    </Grid>

    <Grid item>
      <RewardsBar />
    </Grid>

    <Grid item>
      <BannerSlider />
    </Grid>

    <Grid item>
      <MainContent>
        <Container>
          <Grid container spacing={4} content={content}>
          
            <Grid item xs={12} container direction="row" justify="center" alignItems="center">
              <Features />
            </Grid>
            <Divider component="hr" style={{ width:"100%" }}/> 

            <Grid item xs={12} container justify="center" alignItems="center"> 
              <Brands />  
            </Grid>

            <Grid item xs={12} container>
              <HighlightCategories />  
            </Grid>

          </Grid>
        </Container>
      </MainContent>
    </Grid>

    <Grid item>
      <Footer />
    </Grid>

  </Grid>
);

export default Home;