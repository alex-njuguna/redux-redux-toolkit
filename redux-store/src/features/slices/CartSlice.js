import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      try {
        const existingProduct = state.cart.find(
          (item) =>
            item.id === product.id &&
            item.size === product.size &&
            item.color === product.color
        );

        if (existingProduct) {
          existingProduct.amount++;
          existingProduct.totalPrice += product.price;
          state.amount++;
          state.totalAmount += product.price;
        } else {
          state.cart.push({
            ...product,
            amount: 1,
            totalPrice: product.price,
          });
          state.totalAmount++;
          state.totalPrice += product.price;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
