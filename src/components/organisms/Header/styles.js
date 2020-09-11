import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>
  createStyles({
    header: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    topheader: {
      alignItems: "center",
      backgroundColor: "#2983B9",
      display: "flex",
      height: "55px",
      [theme.breakpoints.up("lg")]: {
        height: "65px",
      },
    },
    subheader: {
      alignItems: "center",
      backgroundColor: "#2D7AA9",
      display: "flex",
      height: "60px",
    },
    vcenter: {
      alignItems: "center",
      display: "flex",
    },
  })
);
