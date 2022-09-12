export const actionsAmount = {
  amountPosts: "AMOUNT_POSTS",
};

export const amountPosts = (amount) => {
  return {
    type: actionsAmount.amountPosts,
    payload: amount,
  };
};
