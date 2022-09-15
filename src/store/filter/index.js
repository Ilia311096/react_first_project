import { createSlice } from "@reduxjs/toolkit";

const initialState = "all";

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterPosts: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const filterSliceActions = filterSlice.actions;
