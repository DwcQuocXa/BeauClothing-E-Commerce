export const baseURL = "http://localhost:5000/api/v1";

//PRODUCT

export const SET_ALL_PRODUCTS = "GET_ALL_PRODUCT";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export type Categories = "T-Shirts" | "Pants" | "Shoes" | "Jackets";

export type Product = {
  name: string;
  description: string;
  categories: Categories;
  sizes: string[];
  price: number;
  img: string[];
};

export type SetProductsAction = {
  type: typeof SET_ALL_PRODUCTS;
  payload: {
    products: Product[];
  };
};

export type GetProductsAction = {
  type: typeof GET_ALL_PRODUCTS;
};

export type ProductsState = {
  productsList: Product[];
};
