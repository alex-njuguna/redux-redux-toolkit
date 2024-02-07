import { createSlice } from "@reduxjs/toolkit";

import { storeData } from "../../assets/data/dummyData";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: storeData,
  reducers: {
    filterProducts(state, action) {
        try {
            return state.filter((product) => product.type === action.payload)
        } catch (error) {
            console.log(error)
        }
    },
  },
});

export const { filterProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
