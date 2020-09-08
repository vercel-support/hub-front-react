import React, { useEffect, useState } from "react";
import { OneColumn } from "../../templates";
import { Success as SuccessComponent } from "../../organisms";
import { Grid } from "@material-ui/core";

const Success = ({ content }) => {
  const [ paymentResponse, setPaymentResponse ] = useState(null);

  useEffect(() => {
    setPaymentResponse(JSON.parse(localStorage.getItem("payment-response") || "{}"));
  }, []);

  return (
    <OneColumn content={content}>
      <Grid item xs={12} lg={12}>
        <SuccessComponent paymentResponse={paymentResponse}/>
      </Grid>
    </OneColumn>
  );

};


export default Success;
