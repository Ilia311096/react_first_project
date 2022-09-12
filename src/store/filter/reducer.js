import { actionsFilter } from "./action";
const initState = "all";

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsFilter.filterPosts:
      return action.payload;
    default:
      return state;
  }
};
