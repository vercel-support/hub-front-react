import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import { Logo } from "../../atoms";
import {
  GeoLocation,
  HeaderLinks,
  Menu,
  MenuMobile,
  MiniCart,
  Search,
} from "../../molecules";
import useStyles from "./styles";

const Header = ({ content }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Box component="div" className={classes.topheader}>
        <Container>
          <Grid container className={classes.vcenter}>
            <Grid item lg={2} xs={8}>
              <Hidden lgUp>
                <MenuMobile categories={content?.data.categories.data} />
              </Hidden>
              <Logo />
            </Grid>
            <Grid item lg={6} xs={2}>
              <Search />
            </Grid>
            <Hidden mdDown>
              <Grid item lg={3}>
                <HeaderLinks />
              </Grid>
            </Hidden>
            <Grid item lg={1} xs={1}>
              <MiniCart />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="div" className={classes.subheader}>
        <Container>
          <Grid container>
            <Grid item lg={2} xs={12}>
              <GeoLocation />
            </Grid>
            <Hidden mdDown>
              <Grid item lg={10}>
                <Menu categories={content?.data?.categories?.data} />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
