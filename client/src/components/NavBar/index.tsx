import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { Link } from "react-router-dom";

import useStyles from "./style";

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none" }}
    >
      <Toolbar className={classes.toolBar}>
        <Link
          to="/products"
          style={{
            textDecoration: "none",
            color: "inherit",
            flexGrow: 1,
            fontWeight: 600,
            fontFamily: "Lucida Console",
            fontSize: 60,
          }}
        >
          BEAU
        </Link>

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
