import React, { useContext, useEffect, useState } from "react";
import { requestGeocode } from "../../../services";
import RootContext from "../../../store";

const GeoLocation = () => {
  const { geo } = useContext(RootContext);
  const [address, setAddress] = useState("");

  const getGeo = async () => {
    const response = await requestGeocode(geo.latitude, geo.longitude);

    if (!response) return null;

    const { road, suburb, city, state, postcode } = response.components;
    setAddress(`${road}, ${suburb}, ${city} - ${state} - ${postcode}`);
  };

  useEffect(() => {
    if (!geo) return;

    getGeo();
  }, [geo]);

  return !address ? (
    <span>Não foi possível identificar sua localização!</span>
  ) : (
    <span>Você está aqui: {address}</span>
  );
};

export default GeoLocation;
