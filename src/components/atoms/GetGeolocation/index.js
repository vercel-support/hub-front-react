import React from "react";
import { store } from "../../../store";

const GetGeolocation = () => {
  const { dispatch } = React.useContext(store);

  React.useEffect(() => {
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
    } else {
      dispatch;
    }
  }, []);

  return null;
};

export default GetGeolocation;
