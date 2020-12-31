import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import RoomIcon from "@material-ui/icons/Room";
import PaymentIcon from "@material-ui/icons/Payment";

import { SteppersStyles } from "./styles";

function LibStepIcon(props) {
  const icons = {
    1: <AccountCircleIcon />,
    2: <RoomIcon />,
    3: <PaymentIcon />,
  };

  return <div>{icons[String(props.icon)]}</div>;
}

const Steppers = ({ activeStep, steps }) => {
  return (
    <SteppersStyles>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={LibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </SteppersStyles>
  );
};

export default Steppers;
