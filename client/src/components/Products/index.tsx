import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";

import { useAppSelector } from "../../hooks/useAppDispatchAndSelector";
import BackToTop from "../BackToTop";
import ProductCard from "./ProductCard";
import Search from "./Search";
import useStyles from "./style";

const Products = () => {
  const classes = useStyles();
  const products = useAppSelector((state) => state.products.productsList);
  const searchTerm = useAppSelector((state) => state.products.searchTerm);
  return (
    <div className={classes.root}>
      <BackToTop />
      <Box className={classes.upper}>
        <Typography
          variant="h3"
          sx={{ flexGrow: 1, fontWeight: 600, fontFamily: "Lucida Console" }}
        >
          VIEW ALL
        </Typography>
        <Search />
      </Box>
      {!products.length ? (
        <CircularProgress className={classes.loading} size={50} />
      ) : (
        <Grid container spacing={3}>
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <Grid key={product._id} item xs={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
