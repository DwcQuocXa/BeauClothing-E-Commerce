import {
  Product,
  SET_ALL_PRODUCTS,
  SetProductsAction,
  GET_ALL_PRODUCTS,
  GetProductsAction,
} from "../../types";

export function setProducts(products: Product[]): SetProductsAction {
  return {
    type: SET_ALL_PRODUCTS,
    payload: {
      products,
    },
  };
}

export function getProducts(): GetProductsAction {
  return {
    type: GET_ALL_PRODUCTS,
  };
}
