import { createStore, combineReducers } from "redux";
import { postsReducer } from "./posts/reducer";
import { termReducer } from "./term/reducer";
import { filterReducer } from "./filter/reducer";
import { amountReducer } from "./amount/reducer";
const rootreducer = combineReducers({
  posts: postsReducer,
  term: termReducer,
  filter: filterReducer,
  amount: amountReducer,
});

export const store = createStore(rootreducer);
