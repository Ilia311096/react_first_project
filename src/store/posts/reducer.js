import { actionsPost } from "./action";
const initState = [
  { label: "first", important: true, like: true, key: 0 },
  { label: "first2", important: false, like: false, key: 1 },
  { label: "first3", important: true, like: false, key: 2 },
];

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsPost.addPost:
      const newLabel = action.payload;
      const newPost = {
        label: newLabel,
        important: false,
        like: false,
        key: new Date().getTime(),
      };
      const afterAdd = [...state, newPost];
      return afterAdd;
    case actionsPost.onDelete:
      const afterDelete = state.filter((item) => item.key !== action.payload);
      return afterDelete;
    case actionsPost.onLike:
      const indexLike = state.findIndex((item) => item.key === action.payload);
      const afterLike = [...state];
      afterLike[indexLike].like = !afterLike[indexLike].like;
      return afterLike;
    case actionsPost.onImportant:
      const indexImportant = state.findIndex(
        (item) => item.key === action.payload
      );
      const afterImportant = [...state];
      afterImportant[indexImportant].important =
        !afterImportant[indexImportant].important;
      return afterImportant;
    default:
      return state;
  }
};
