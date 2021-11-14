import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import useStyles from "./style";

const drawerWidth = 240;

export default function SideDrawer() {
  const classes = useStyles();

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", paddingTop: 4 }}>
        <List>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", paddingLeft: 1.75 }}
          >
            New Arrivals
          </Typography>
          {["View All", "Clothes", "Shoes", "Underwear"].map((text) => (
            <ListItem button key={text}>
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
        <br />
        <List>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", paddingLeft: 1.75 }}
          >
            Trending Now
          </Typography>
          {[
            "Gift Guide",
            "The Christmas Shop",
            "Winter must haves",
            "New neutrals",
          ].map((text) => (
            <ListItem button key={text}>
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
        <br />
        <List>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", paddingLeft: 1.75 }}
          >
            Shop by Product
          </Typography>
          {["View All", "Jackets & Coat", "T-shirts", "Pants", "Shoes"].map(
            (text) => (
              <ListItem button key={text} onClick={() => handleClick()}>
                <Typography
                  variant="h6"
                  sx={{ textDecoration: "underline", fontSize: 16 }}
                >
                  {text}
                </Typography>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
}
