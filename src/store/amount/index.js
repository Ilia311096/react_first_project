import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    amountPosts: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const amountSliceActions = amountSlice.actions;
