import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

import useStyles from "./style";
import SideDrawer from "./SideDrawer";

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
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
      <SideDrawer />
    </Box>
  );
}
