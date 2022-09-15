import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts";
import { termSlice } from "./term";
import { filterSlice } from "./filter";
import { amountSlice } from "./amount";
const rootReducer = combineReducers({
  posts: postsSlice.reducer,
  term: termSlice.reducer,
  filter: filterSlice.reducer,
  amount: amountSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
