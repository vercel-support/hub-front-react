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
  const { geoLocationOpen } = state;
  const [stores, setStores] = useState([]);
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

  const setStore = () => {
    const savedStore = localStorage.getItem("myStore");
    if(savedStore && savedStore !== "undefined"){
      setMyStore(JSON.parse(savedStore));
    }
  }

  const setNearbyStores = () => {
    const savedStores = localStorage.getItem("nearby-stores");
    if(savedStores && savedStores !== "undefined"){
      setStores(JSON.parse(savedStores));
    }
  }

  useEffect(() => {
    if(state.myStore)
      setMyStore(state.myStore);
    if(state.stores && state.stores.length > 0)
      setStores(state.stores);
  }, [state.geo, state.myStore, state.stores])

  useEffect(() => {
    setStore();
    setNearbyStores();

    const geoElement = document.getElementById("geolocation_container");
    if(geoElement){
        document.addEventListener("mousedown", (e) => {
          if (!geoElement.contains(e.target)) {
            setOpen(false);
            dispatch({ type: "SET_GEOLOCATION_OPEN", payload: false });
          }
        });
    }

  }, []);

  const onSubmit = () => {
    dispatch({ type: "POSTALCODE_SUCCESS", payload: postalcode });
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
      <GeoLocationCurrentStyled {...open} onClick={() => setOpen(!open)} >
        <span className={open && "openDrop"}>minha loja</span>
        <p className={open && "openDrop"}>
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
              { myStore.id !== "cd" && myStore.distance ? <p>A {formatStoreDistance(myStore.distance)} de você</p>: null }
              { myStore.id !== "cd" ? <p>{formatAddress(myStore.address)}</p> : null }
              <span>(minha loja)</span>
            </GeoLocationStoreStyled>
            {stores.slice(0, 10).map((store) => (
              <GeoLocationStoreStyled 
                key={store.id}
                onClick={() =>{
                  setOpen(false);
                  dispatch({ type: "SET_GEOLOCATION_OPEN", payload: false });
                  dispatch({ type: "CHANGE_STORE", payload: { store } });
                }}
              >
                <h4>{store.name}</h4>
                { store.id !== "cd" && myStore.distance ? <p>A {formatStoreDistance(store.distance)} de você</p> : null }
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
