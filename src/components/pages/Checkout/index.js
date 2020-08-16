import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import {
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core";
import {AddressForm, Review, PaymentForm, ResumeForm} from "../../molecules";
import { OneColumn } from "../../templates";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RoomIcon from '@material-ui/icons/Room';
import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  }  
}));

const steps = ["Identificação", "Endereço", "Pagamento"];


const useColorlibStepIconStyles = makeStyles({
  root: {    
    color: '#ccc',    
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg' : {
      fontSize : '45px'
    }
  },
  active: {
    color : '#000'    
  },
  completed: {
    color : '#000'
  },
});

function LibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AccountCircleIcon />,
    2: <RoomIcon />,
    3: <PaymentIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error("Unknown step");
  }
}

const Checkout = ({ content }) => {
  const classes = useStyles();
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
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={LibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>    
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Obrigado pelo seu pedido.
                </Typography>
                <Typography variant="subtitle1">
                  O número do seu pedido é # 2001539. Enviamos seu pedido por e-mail a
                  confirmação, e enviaremos uma atualização quando seu pedido tiver
                  enviado.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Voltar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finalizar Pedido" : "Proximo"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Grid>

      <Grid item xs={12} lg={4}>        
        
        <ResumeForm />
        
      </Grid>

    </OneColumn>
  );
};

export default Checkout;
