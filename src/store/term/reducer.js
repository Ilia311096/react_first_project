import { actionsTerm } from "./action";
const initState = "";

export const termReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsTerm.searchTerm:
      return action.payload;
    default:
      return state;
  }
};
