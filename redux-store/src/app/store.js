import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/SliderSlice";
import productsReducer from "../features/slices/ProductsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
  },
});
