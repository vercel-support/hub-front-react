import CssBaseline from "@material-ui/core/CssBaseline";
import { StateProvider } from "../src/store";
import GlobalStyle from "../src/utils/globalStyle";
import { GetGeolocation } from "../src/components/atoms";
import "react-image-gallery/styles/css/image-gallery.css";

const App = ({ Component, pageProps }) => (
  <StateProvider>
    <CssBaseline />
    <GlobalStyle />
    <GetGeolocation />
    <Component {...pageProps} />
  </StateProvider>
);

export default App;
