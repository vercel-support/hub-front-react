import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import { store } from "../../../store";
import ModalStyled from "./styles";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const useStyles = makeStyles({
  root: {
    margin: 0,
  },
  title: {

  },
  contentText: {
  },
  geoButton: {
    position: 'absolute',
  },
  button: {
    padding: "15px",
    color: "#666"
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
  const [openGeo, setOpenGeo] = React.useState(true);
  const classes = useStyles();

  const fetchStoreAndSave = async(storeId) => {
    try{
        let serviceResponse = await axios.get(`${API_URL}/logistic/store?storeId=${storeId}`);
        if(serviceResponse && serviceResponse.data && (serviceResponse.data.data.id)){
          setOpenGeo(false);
          dispatch({ type: "SET_NEW_STORE", payload: { store: serviceResponse.data.data } });
        }
    }
    catch(error){
        console.log(error.message);
    }
  }

  useEffect(() => {

    let params = (new URL(document.location)).searchParams;
    let store_query = params.get("loja");

    if(store_query) fetchStoreAndSave(store_query);
    else{
      const savedStore = localStorage.getItem("myStore");
      if(savedStore && savedStore !== "undefined") setOpenGeo(false);
    }

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
          setOpenGeo(false);
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
      dispatch({ type: "POSTALCODE_SUCCESS", payload: validated });
      localStorage.setItem("postalcode-delivery", validated);
      setOpenGeo(false);
    }
  }

  return (    
    <>
        <Dialog fullWidth="true" maxWidth="sm" className={classes.root} aria-labelledby="customized-dialog-title" open={openGeo}>
          <ModalStyled>
            <img
              src="/assets/images/modal-delivery.jpg"
              alt="formas de pagamento"
              title="formas de pagamento"
              width="100"
            />
            <h2>Onde você está?</h2>
            <p>Dessa forma você terá acesso aos produtos e ofertas da sua região.</p>

            <Button
            variant="outlined"
            size="large"
            fullWidth="true"
            onClick={geoLocate}
            className={classes.button}
            startIcon={<MyLocationIcon />}
            >
              Usar minha Localização 
            </Button>
            
            <TextField
              id="outlined-full-width"
              label="Digite o CEP"
              onChange={handlePostalCodeChange}
              placeholder="Digite seu CEP para entrega"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </ModalStyled>
        </Dialog>
    </>
  );
};

export default GetGeolocation;
