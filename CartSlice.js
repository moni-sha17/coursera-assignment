import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 };
        state.totalQuantity++;
        state.totalPrice += plant.price;
      }
    },
    increase(state, action) {
      const item = state.items[action.payload];
      item.quantity++;
      state.totalQuantity++;
      state.totalPrice += item.price;
    },
    decrease(state, action) {
      const item = state.items[action.payload];
      item.quantity--;
      state.totalQuantity--;
      state.totalPrice -= item.price;
      if (item.quantity === 0) delete state.items[action.payload];
    },
    remove(state, action) {
      const item = state.items[action.payload];
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      delete state.items[action.payload];
    },
  },
});

export const { addToCart, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
