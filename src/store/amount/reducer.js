import { actionsAmount } from "./action";
const initState = 0;

export const amountReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsAmount.amountPosts:
      return action.payload;
    default:
      return state;
  }
};
