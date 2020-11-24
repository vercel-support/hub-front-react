import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>
  createStyles({
    header: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginBottom: "30px",
    },
    topheader: {
      alignItems: "center",
      backgroundColor: "#333333",
      display: "flex",
      height: "55px",
      [theme.breakpoints.up("lg")]: {
        height: "80px",
      },
    },
    subheader: {
      alignItems: "center",
      backgroundColor: "#000000",
      display: "flex",
      height: "40px",
    },
    vcenter: {
      alignItems: "center",
      display: "flex",
    },
    button: {
      display: "grid",
      textAlign: "end",
      fontSize: "16px",
      lineHeight: "17px",
    },
    span: {
      fontSize: "12px",
    }
  })
);
