export const actionsPost = {
  onDelete: "DELETE_POST",
  onLike: "LIKE_POST",
  onImportant: "IMPORTANT_POST",
  addPost: "ADD_POST",
  searchTerm: "SEARCH_TERM",
};

export const searchTerm = (term) => {
  return {
    type: actionsPost.searchTerm,
    payload: term,
  };
};
export const addPost = (label) => {
  return {
    type: actionsPost.addPost,
    payload: label,
  };
};
export const onDelete = (id) => {
  return {
    type: actionsPost.onDelete,
    payload: id,
  };
};
export const onLike = (id) => {
  return {
    type: actionsPost.onLike,
    payload: id,
  };
};
export const onImportant = (id) => {
  return {
    type: actionsPost.onImportant,
    payload: id,
  };
};
