import { createSlice } from "@reduxjs/toolkit";

import { storeData } from "../../assets/data/dummyData";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
  }, 
  reducers: {
    filterProducts(state, action) {
      try {
        const filtered = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filtered
        console.log(filtered);
        const saveState = JSON.stringify(filtered)
        sessionStorage.setItem("filteredData", saveState)
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { filterProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
