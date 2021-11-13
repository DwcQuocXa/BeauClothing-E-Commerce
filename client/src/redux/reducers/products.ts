import {
  ProductsState,
  SetProductsAction,
  SET_ALL_PRODUCTS,
} from "../../types";

const initialState: ProductsState = {
  productsList: [],
};

export default function products(
  state = initialState,
  action: SetProductsAction
): ProductsState {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      const { products } = action.payload;
      return {
        ...state,
        productsList: [...state.productsList].concat(products),
      };

    default:
      return state;
  }
}
