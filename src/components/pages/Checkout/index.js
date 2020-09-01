import React, { useContext, useEffect } from "react";
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

const steps = ["Identificação", "Endereço", "Pagamento"];

function getStepContent(step, handleNext, shipping) {
  switch (step) {
    case 0:
      return <Login handleNext={handleNext} />;
    case 1:
      return <Review handleNext={handleNext} shipping={shipping} total={shipping.shippingOptions.economicalDelivery.total} />;
    case 2:
      return <PaymentForm total={shipping.shippingOptions.economicalDelivery.total} />;
    default:
      throw new Error("Passo desconhecido");
  }
}

const Checkout = ({ content }) => {
  const { state, dispatch } = useContext(store);
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "CART_REQUEST",
        payload: {
          sku: "7898049719273",
          storeId: "5e8e1c6e43a61128433f0eed",
          shippingType: "pickup",
        },
      });

      dispatch({
        type: "SHIPPING_REQUEST",
        payload: {
          postalCode: "02976-090",
          items: [
            {
              sku: "7898049719273",
              name: "Apoquel 5,4 mg",
              quantity: 1,
              price: 189,
              specialPrice: 170.1,
            },
          ],
          storeId: "5e8e1c6e43a61128433f0eed",
        },
      });
    }, 1000);
  }, []);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  console.log(state.user, "state.user")

  return (
    <Grid container direction="column" justify="space-between">
      <Grid item>
        <HeaderClen content={content} />
      </Grid>
      <Grid item>
        <main>
          <Container>
            <Grid container spacing={4}>
              {content.data?.breadcrumbs?.length && (
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
                    getStepContent(activeStep, handleNext, state.shippingCart)
                  )}
                </Paper>
              </Grid>
              <Hidden mdDown>
                <Grid item xs={12} lg={4}>
                  <Grid xs={12} lg={12}>
                    <ResumeForm shipping={state.shippingCart} total={state.shippingCart.shippingOptions && state.shippingCart.shippingOptions.economicalDelivery.total} />
                  </Grid>

                  <Grid xs={12} lg={12}>
                    {
                      state.user &&
                      <InformationForm />
                    }
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
