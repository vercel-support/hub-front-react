import React from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Hidden,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons"

import { InformationForm, ResumeForm } from "../../molecules";

import { Logo } from "../../atoms";
import useStyles from "./styles";

const HeaderClen = ({ content }) => {
  const classes = useStyles();
  const [top, setTop] = React.useState(false);

  return (
    <header className={classes.header}>
      <Box component="div" className={classes.topheader}>
        <Container>
          <Grid container className={classes.vcenter}>
            <Grid item lg={9} xs={8}>
              <Logo />
            </Grid>

            <Hidden lgUp>
              <Grid item lg={3} xs={3}>
                <Button onClick={() => setTop(true)} className={classes.button}><span className={classes.span}>2 itens</span>R$ 350,00</Button>
                <Drawer anchor={"top"} open={top} onClose={() => setTop(false)}>
                  <ResumeForm />
                  {/* <InformationForm /> */}
                </Drawer>
              </Grid>
              <Grid item lg={1} xs={1}>
              <ExpandMore />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>
    </header>
  );
};

export default HeaderClen;
