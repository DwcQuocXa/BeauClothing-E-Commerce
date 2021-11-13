import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  toolBar: {
    background: "white",
    color: "black",
    height: 80,
  },
  signInBtn: {
    display: "flex",
    justifyContent: "space-around",
    width: 120,
    height: 40,
  },
}));
