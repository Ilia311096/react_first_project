export const actionsTerm = {
  searchTerm: "SEARCH_TERM",
};

export const searchTerm = (term) => {
  return {
    type: actionsTerm.searchTerm,
    payload: term,
  };
};
