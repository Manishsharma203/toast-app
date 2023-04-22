import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SingleItem } from "utils/types";

export interface ICartProduct extends SingleItem {
  qty: number;
}
export interface ICart {
  [id: string]: ICartProduct;
}
interface IinitialLState {
  currentOrders: ICart;
  previousOrders: ICart;
}
const initialState: IinitialLState = {
  currentOrders: {},
  previousOrders: {},
};

const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    incrementQty: (state, action) => {
      const item = state.currentOrders[action.payload.id];
      if (item) {
        item.qty++;
        state.currentOrders[item.id] = item;
      } else {
        state.currentOrders[action.payload.id] = { ...action.payload, qty: 1 };
      }
    },
    decrementQty: (state, action) => {
      const item = state.currentOrders[action.payload.id];
      if (item.qty > 0) {
        item.qty--;
        state.currentOrders[item.id] = item;
      }
      if (item.qty === 0) {
        const data = state.currentOrders;
        const itemId = action.payload.id;
        const { [itemId]: id, ...restItems } = data;
        state.currentOrders = restItems;
      }
    },
    addToPrevOrders: (state) => {
      const currOrders = state.currentOrders;
      const prevOrders = state.previousOrders;
      for (let orderID in currOrders) {
        if (prevOrders[orderID]) {
          const item = state.previousOrders[orderID];
          item.qty += currOrders[orderID].qty;
          state.previousOrders[orderID] = item;
        } else {
          state.previousOrders[orderID] = currOrders[orderID];
        }
      }
      state.currentOrders = {};
    },
  },
});

export const { incrementQty, decrementQty, addToPrevOrders } =
  cartSlice.actions;

export default cartSlice.reducer;
