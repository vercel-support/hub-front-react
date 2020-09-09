import React, { useContext, useEffect } from "react";
import { store } from "../../../store";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const GetGeolocation = () => {
  const { state } = useContext(store);
  const { loadingData = false } = state;
  const classes = useStyles();

  useEffect(() => {
  }, [loadingData]);

  return (
    <Backdrop className={classes.backdrop} open={loadingData}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default GetGeolocation;
