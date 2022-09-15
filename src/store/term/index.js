import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const termSlice = createSlice({
  name: "term",
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const termSliceActions = termSlice.actions;
