import CssBaseline from "@material-ui/core/CssBaseline";

const App = ({ Component, pageProps }) => (
  <React.Fragment>
    <CssBaseline />
    <Component {...pageProps} />
  </React.Fragment>
);

export default App;
