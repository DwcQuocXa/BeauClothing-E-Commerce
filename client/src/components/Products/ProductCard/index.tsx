import {
  Box,
  Card,
  CardMedia,
  Toolbar,
  Typography,
  CardContent,
} from "@mui/material";
import React from "react";
import { Product } from "../../../types";

type PropsType = {
  product: Product;
};

const ProductCard = ({ product }: PropsType) => {
  return (
    <Card>
      <CardMedia
        component="img"
        src={product.img[0]}
        title={product.name}
        sx={{ height: 450 }}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {product.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          £{product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
