import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { FirstLine, SecondLine } from "./styles";
import { Copyright, LogoFooter } from "../../atoms";
import { FooterLinks, PaymentMethods } from "../../molecules";

const Footer = () => (
  <footer>
    <FirstLine>
      <Container>
        <Grid container>
          <Grid item lg={7} xs={12}>
            <FooterLinks />
          </Grid>
          <Grid item lg={5} xs={12}>
            <PaymentMethods />
          </Grid>
        </Grid>
      </Container>
    </FirstLine>

    <SecondLine>
      <Container>
        <Grid container>
          <Grid item lg={2} xs={12}>
            <LogoFooter />
          </Grid>
          <Grid item lg={10} xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </SecondLine>
  </footer>
);

export default Footer;
