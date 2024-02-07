import { createSlice } from "@reduxjs/toolkit";

import { storeData } from "../../assets/data/dummyData";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filtered = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filtered;
        console.log(filtered);
        const saveState = JSON.stringify(filtered);
        sessionStorage.setItem("filteredData", saveState);
      } catch (error) {
        console.log(error);
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
        console.log(oneProduct);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { filterProducts, singleProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
