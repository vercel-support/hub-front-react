import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { AddressForm, Review, PaymentForm } from "../../molecules";
import { Steppers, Success } from "../../organisms";
import { OneColumn } from "../../templates";

const steps = ["Identificação", "Endereço", "Pagamento"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
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
    <OneColumn content={content}>
      <Grid item xs={12} lg={8}>
        <Paper>
          <Steppers activeStep={activeStep} steps={steps} />
          {activeStep === steps.length ? (
            <Success />
          ) : (
            getStepContent(activeStep)
          )}
        </Paper>
      </Grid>

      <Grid item xs={12} lg={4}>
        TESTE
      </Grid>

      <Grid item xs={12}>
        {activeStep !== 0 && <Button onClick={handleBack}>Voltar</Button>}
        <Button variant="contained" color="primary" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finalizar Pedido" : "Proximo"}
        </Button>
      </Grid>
    </OneColumn>
  );
};

export default Checkout;
