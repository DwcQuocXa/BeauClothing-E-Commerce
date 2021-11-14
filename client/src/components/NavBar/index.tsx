import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

import useStyles from "./style";
import BackToTop from "../BackToTop";

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none" }}
    >
      <Toolbar className={classes.toolBar}>
        <Typography
          variant="h3"
          sx={{ flexGrow: 1, fontWeight: 600, fontFamily: "Lucida Console" }}
        >
          BEAU
        </Typography>

        <Button
          className={classes.signInBtn}
          variant="outlined"
          color="inherit"
        >
          <AccountBoxOutlinedIcon />
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}
