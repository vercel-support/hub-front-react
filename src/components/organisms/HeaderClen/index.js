import React, { useEffect, useState } from "react";
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

const HeaderClen = ({ cart }) => {
  const classes = useStyles();
  const [top, setTop] = useState(false);

  return (
    <header className={classes.header}>
      <Box component="div" className={classes.topheader}>
        <Container>
          <Grid container className={classes.vcenter}>
            <Grid item lg={9} xs={8}>
              <Logo />
            </Grid>

            <Hidden lgUp>
              { cart ? 
                <Grid item lg={3} xs={3}>
                  <Button 
                    onClick={() => setTop(true)} 
                    className={classes.button}
                  >  
                    <span className={classes.span}>{cart.products.length} {cart.products.length == 1 ? " item" : "itens"}</span>R$ {cart.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </Button>
                  <Drawer anchor={"top"} open={top} onClose={() => setTop(false)}>
                    <ResumeForm cart={cart} />
                    {/* <InformationForm /> */}
                  </Drawer>
                </Grid>
                :
                null
              }

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
