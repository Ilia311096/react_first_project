export const actionsFilter = {
  filterPosts: "FILTER_POSTS",
};

export const filterPosts = (filter) => {
  return {
    type: actionsFilter.filterPosts,
    payload: filter,
  };
};
