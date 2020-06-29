import { geolocated } from "react-geolocated";
import CssBaseline from "@material-ui/core/CssBaseline";
import RootContext from "../src/store";

const App = ({
  Component,
  pageProps,
  isGeolocationAvailable,
  isGeolocationEnabled,
  coords,
}) => {
  const geo = isGeolocationAvailable && isGeolocationEnabled ? coords : false;

  return (
    <RootContext.Provider value={{ geo }}>
      <CssBaseline />
      <Component {...pageProps} />
    </RootContext.Provider>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
