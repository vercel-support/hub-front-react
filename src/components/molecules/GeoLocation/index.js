import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ExpandLess, ExpandMore, MyLocation, Room } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { store } from "../../../store";
import { DropDown, GetGeolocation } from "../../atoms";
import GeoLocationStyled, {
  GeoLocationCurrentStyled,
  GeoLocationFormStyled,
  GeoLocationListStyled,
  GeoLocationStoreStyled,
  GeoLocationTriggerStyled,
} from "./styles";

const GeoLocation = () => {
  const { state, dispatch } = useContext(store);
  const { stores = [], geoLocationOpen } = state;
  const [myStore, setMyStore] = useState({
    id: "cd",
    name: "Centro de distribuição",
  });
  const [open, setOpen] = useState(false);
  const [postalcode, setPostalcode] = useState();
  const { register, handleSubmit } = useForm();

  const [geo, setGeo] = useState(false);

  useEffect(() => {
    setOpen(geoLocationOpen);
  }, [geoLocationOpen]);

  useEffect(() => {
    const savedStore = localStorage.getItem("myStore");
    if(savedStore && savedStore !== "undefined"){
      setMyStore(JSON.parse(savedStore));
    }

    if(document.getElementById("geolocation_container")){
      document.addEventListener("mousedown", (e) => {
        if (!document.getElementById("geolocation_container").contains(e.target)) {
          setOpen(false);
          dispatch({ type: "SET_GEOLOCATION_OPEN", payload: false });
        }
      });
    }

  }, []);
  
  useEffect(() => {
    if(state.myStore && state.myStore.id !== "cd") setMyStore(state.myStore);
  }, [state.myStore, stores]);

  const onSubmit = () => {
    dispatch({ type: "SEARCH_BY_POSTAL_CODE", payload: postalcode });
  }

  const formatAddress = (address) => {
    if (!address) return null;

    const complement = address.complement ? `- ${address.complement}` : "";
    return `${address.street}, ${address.number} ${complement} - ${address.city}/${address.state}`;
  };

  const formatStoreDistance = (distance) => {
    return distance >= 1000 ? `${(distance/1000).toFixed(1)} km` : `${distance} m`;
  }

  return (
    <GeoLocationStyled
      id="geolocation_container"
      onMouseOut={() => { if(!geoLocationOpen) setOpen(false)}}
      onMouseOver={() => setOpen(true)}
    >
      <Room htmlColor="white" />
      <GeoLocationCurrentStyled {...open} onClick={() => setOpen(!open)}>
        <span>minha loja</span>
        <p>
          {myStore.name} {open ? <ExpandLess /> : <ExpandMore />}
        </p>
      </GeoLocationCurrentStyled>
      <DropDown open={open}>
        <div>
          <GeoLocationTriggerStyled>
            <span>encontre sua loja</span>
            <p onClick={() => setGeo(true)}>
              {geo && <GetGeolocation />}
              <MyLocation /> usar minha localização
              <span></span>
            </p>
          </GeoLocationTriggerStyled>

          <GeoLocationFormStyled onSubmit={handleSubmit(onSubmit)}>
            <input
              name="cep"
              label="CEP"
              variant="outlined"
/*               value={postalcode} */
              placeholder="Digite seu cep"
              ref={register}
              onChange={({ target }) => setPostalcode(target.value)}
            />
            <Button variant="outlined" color="primary" type="submit">
              Buscar
            </Button>
          </GeoLocationFormStyled>

          <GeoLocationListStyled>
            <GeoLocationStoreStyled selected>
              <h4>{myStore.name}</h4>
              { myStore.id !== "cd" ? <p>A {formatStoreDistance(myStore.distance)} de você</p>: null }
              { myStore.id !== "cd" ? <p>{formatAddress(myStore.address)}</p> : null }
              <span>(minha loja)</span>
            </GeoLocationStoreStyled>
            {stores.slice(0, 10).map((store) => (
              <GeoLocationStoreStyled 
                key={store.id}
                onClick={() =>{
                  setOpen(false);
                  dispatch({ type: "SET_GEOLOCATION_OPEN", payload: false });
                  dispatch({ type: "CHANGE_STORE", payload: { store } })
                }}
              >
                <h4>{store.name}</h4>
                { store.id !== "cd" ? <p>A {formatStoreDistance(store.distance)} de você</p> : null }
                <p>{formatAddress(store.address)}</p>
{/*                 <span
                >
                  (alterar para essa loja)
                </span> */}
              </GeoLocationStoreStyled>
            ))}
          </GeoLocationListStyled>
        </div>
      </DropDown>
    </GeoLocationStyled>
  );
};

export default GeoLocation;
