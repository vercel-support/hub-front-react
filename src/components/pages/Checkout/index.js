import React from "react";
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

function getStepContent(step, handleNext) {
  switch (step) {
    case 0:
      return <Login handleNext={handleNext}/>;
    case 1:
      return <Review />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error("Passo desconhecido");
  }
}

const Checkout = ({ content }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
                    getStepContent(activeStep, handleNext)
                  )}
                </Paper>
              </Grid>
              <Hidden mdDown>
                <Grid item xs={12} lg={4}>
                  <Grid xs={12} lg={12}>
                    <ResumeForm />
                  </Grid>

                  <Grid xs={12} lg={12}>
                    <InformationForm />
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
