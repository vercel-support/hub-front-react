import React, { useContext, useEffect, useState } from "react";
import { store } from "../../../store";
import { Button, Container, Grid, Hidden, Paper } from "@material-ui/core";
import {
  Review,
  PaymentForm,
  ResumeForm,
  InformationForm,
  Breadcrumbs,
} from "../../molecules";
import { Login, Steppers, Success } from "../../organisms";
import { Footer, HeaderClen } from "../../organisms";
import { checkoutPageView } from '../../../../lib/ga';

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const steps = ["Identificação", "Endereço", "Pagamento"];

function getStepContent(step, handleNext, shipping, updateCart) {
  switch (step) {
    case 0:
      return <Login handleNext={handleNext} />;
    case 1:
      return <Review handleNext={handleNext} />;
    case 2:
      return <PaymentForm updateCart={updateCart}/>;
    default:
      throw new Error("Passo desconhecido");
  }
}

const Checkout = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const [ activeStep, setActiveStep ] = useState(2);
  const [ cart, setCart ] = useState(null);   

  const fetchCart = async() => {
    const cartId = localStorage.getItem("cartId");
    if(cartId){
      try{
        let serviceResponse = await axios.get(`${API_URL}/cart?cartId=${cartId}`);
        if(serviceResponse && serviceResponse.status === 200){
          setCart(serviceResponse.data.data);
        }
      }
      catch(error){
      }
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    checkoutPageView(activeStep + 1, window.dataLayer.push, JSON.parse(localStorage.getItem("productList") || "[]"));
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Grid container direction="column" justify="space-between">
      <Grid item>
        <HeaderClen cart={cart} />
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
              <Grid item xs={12} lg={8}>
                <Paper>
                  <Steppers activeStep={activeStep} steps={steps} />
                  {activeStep === steps.length ? (
                    <Success />
                  ) : (
                    getStepContent(activeStep, handleNext, state.shippingCart, fetchCart)
                  )}
                </Paper>
              </Grid>
              <Hidden mdDown>
                <Grid item xs={12} lg={4}>
                  <Grid xs={12} lg={12}>
                    <ResumeForm cart={cart}/>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </Container>
        </main>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Checkout;
