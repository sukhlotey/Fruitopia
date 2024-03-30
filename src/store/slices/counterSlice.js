import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: {},
    history: [],
  },
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload;
      state.value[JSON.stringify(id)] = (state.value[id] || 0) + 1;
      // state.push(action.payload)
      state.history.push(action.payload);
    },
    decrement: (state, action) => {
      const id = action.payload;
      const indexToRemove = state.history.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        state.value[JSON.stringify(id)] = Math.max((state.value[id] || 0) - 1, 0);
        state.history.splice(indexToRemove, 1); // Remove only one instance of the item
      }
    },
    remove(state, action) {
      const indexToRemove = state.history.findIndex(
        (item) => item.id === action.payload
      );
      if (indexToRemove !== -1) {
        const removedItem = state.history.splice(indexToRemove, 1);
        delete state.value[removedItem[0].id];
      }
    },
  },
});

export const { increment, decrement, remove } = counterSlice.actions;

export default counterSlice.reducer;
