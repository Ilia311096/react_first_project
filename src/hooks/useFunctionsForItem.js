import { useDispatch } from "react-redux";
import { postsSliceActions } from "../store/posts";

export const useFunctionsForItem = () => {
  const dispatch = useDispatch();
  const clickDelete = (id) => dispatch(postsSliceActions.onDelete(id));
  const clickImportant = (id) => dispatch(postsSliceActions.onImportant(id));
  const clickLike = (id) => dispatch(postsSliceActions.onLike(id));
  return {
    clickDelete,
    clickImportant,
    clickLike,
  };
};
