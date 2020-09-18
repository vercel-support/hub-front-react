import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import { store } from "../../../store";

const useStyles = makeStyles({
  root: {
    margin: 0,
  },
  title: {
    fontSize: "12px"
  },
  contentText: {
  },
  geoButton: {
    position: 'absolute',
  },
});

const validatePostalCode = (postalcode) => {
  if (postalcode) {
    let value = postalcode.replace(/\D/g, "");
    return /^[0-9]{8}$/.test(value) ? value : null;
  }
  return null;
};

const GetGeolocation = () => {
  const { dispatch } = React.useContext(store);
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  useEffect(() => {
    const savedStore = localStorage.getItem("myStore");
    if(savedStore && savedStore !== "undefined") setOpen(false);
  }, []);

  const geoLocate = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const payload = {
            available: true,
            enabled: true,
            timeout: false,
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
          dispatch({ type: "GEO_SUCCESS", payload });
          setOpen(false);
        },
        ({ code }) => {
          const payload = {
            available: code !== 2,
            enabled: code !== 1,
            timeout: code === 3,
          };
          dispatch({ type: "GEO_ERROR", payload });
        },
        {
          enableHighAccuracy: true,
        }
      );
    }
  };

  const handlePostalCodeChange = (event) => {
    const validated = validatePostalCode(event.target.value);
    if(validated){
      dispatch({ type: "CHANGE_POSTALCODE", payload: validated });
      localStorage.setItem("postalcode-delivery", validated);
      setOpen(false);
    }
  }

  return (
      
    <div>
      <Dialog className={classes.root} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle className={classes.title} id="customized-dialog-title">
          Onde você está?
        </DialogTitle>
        <DialogContentText className={classes.contentText} id="alert-dialog-description">
          Dessa forma você terá acesso aos produtos e ofertas da sua região.
        </DialogContentText>
        <Button variant="contained" onClick={geoLocate}>Utilizar localização automática</Button>
        <DialogContentText className={classes.contentText} id="alert-dialog-description">
          Você pode também:
        </DialogContentText>
        <TextField id="standard-basic" onChange={handlePostalCodeChange} placeholder="Digitar seu cep"/>
      </Dialog>
    </div>
  );
};

export default GetGeolocation;
