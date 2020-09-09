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
  const { myStore = {}, stores = [] } = state;
  const [open, setOpen] = useState(false);
  const [postalcode, setPostalcode] = useState("00000-000");
  const { register, handleSubmit } = useForm();

  const [geo, setGeo] = useState(false);
  
  useEffect(() => {
  }, [myStore, stores]);

  const onSubmit = () =>
    dispatch({ type: "CHANGE_POSTALCODE", payload: postalcode });

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
      onMouseOut={() => setOpen(false)}
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
            <TextField
              name="cep"
              label="CEP"
              variant="outlined"
              value={postalcode}
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
              <GeoLocationStoreStyled key={store.id}>
                <h4>{store.name}</h4>
                { store.id !== "cd" ? <p>A {formatStoreDistance(store.distance)} de você</p> : null }
                <p>{formatAddress(store.address)}</p>
                <span
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_STORE",
                      payload: { id: store.id },
                    })
                  }
                >
                  (alterar para essa loja)
                </span>
              </GeoLocationStoreStyled>
            ))}
          </GeoLocationListStyled>
        </div>
      </DropDown>
    </GeoLocationStyled>
  );
};

export default GeoLocation;
