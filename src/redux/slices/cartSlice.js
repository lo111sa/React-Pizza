import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  sum: 0,
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.sum = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.count += 1;
    },
    removeItem: (state, action) => {
      const delCount = state.items.find((el) => el.id === action.payload);
      state.items = state.items.filter((el) => el.id !== action.payload);
      state.sum = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.count -= delCount.count;
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
          state.sum -= findItem.price;
          state.count -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
      state.sum = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
