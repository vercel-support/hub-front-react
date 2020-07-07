import CssBaseline from "@material-ui/core/CssBaseline";
import { StateProvider } from "../src/store";
import { GetGeolocation } from "../src/components/atoms";

const App = ({ Component, pageProps }) => (
  <StateProvider>
    <CssBaseline />
    <GetGeolocation />
    <Component {...pageProps} />
  </StateProvider>
);

export default App;
