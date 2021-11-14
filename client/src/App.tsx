import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SideDrawer from "./components/SideDrawer";
import { getProducts } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <NavBar />
      <SideDrawer />
      <Products />
    </Box>
  );
}

export default App;
