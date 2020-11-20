import React from "react";
import Grid from '@material-ui/core/Grid';
import { FeatureImageStyled } from "./styles";

const Features = () => (
    <>
        <Grid item lg={3} md={3} sm={6} xs={6} spacing={4} style={{textAlign:"center"}}>
          <FeatureImageStyled>
            <img
              src="/assets/images/retirada-em-loja-transparente2.png"
              alt="formas de pagamento"
              title="formas de pagamento"
            />
          </FeatureImageStyled>

        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={6} spacing={4} style={{textAlign:"center"}}>
          <FeatureImageStyled>
            <img
                src="/assets/images/entrega-super-expressa-transparente2.png"
                alt="formas de pagamento"
                title="formas de pagamento"
              />
          </FeatureImageStyled>

        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={6} spacing={4} style={{textAlign:"center"}}>
          <FeatureImageStyled>
            <img
              src="/assets/images/estoque-tempo-real-transparente2.png"
              alt="formas de pagamento"
              title="formas de pagamento"
            />
          </FeatureImageStyled>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={6} spacing={4} style={{textAlign:"center"}}>
          <FeatureImageStyled>
            <img
              src="/assets/images/banho-tosa-transparente2.png"
              alt="formas de pagamento"
              title="formas de pagamento"
            />
          </FeatureImageStyled>

        </Grid>
    </>
  );
  
  export default Features;
