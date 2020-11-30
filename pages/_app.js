import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StateProvider } from "../src/store";
import GlobalStyle from "../src/utils/globalStyle";
import { 
  GetGeolocation, 
  LoadingOverlay
} from "../src/components/atoms";
import "react-image-gallery/styles/css/image-gallery.css";
import "../src/utils/embla.css";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { GTM_ID } = publicRuntimeConfig;
import TagManager from 'react-gtm-module';
const tagManagerArgs = { gtmId: GTM_ID };

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <StateProvider>
      <CssBaseline />
      <GlobalStyle />
      <GetGeolocation />
      <Component {...pageProps} />
      <LoadingOverlay />
    </StateProvider>
  );
}

export default App;
