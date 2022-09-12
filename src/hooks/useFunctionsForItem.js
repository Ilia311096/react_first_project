import { useDispatch } from "react-redux";
import { onDelete, onImportant, onLike } from "../store/posts/action";

export const useFunctionsForItem = () => {
  const dispatch = useDispatch();
  const clickDelete = (id) => dispatch(onDelete(id));
  const clickImportant = (id) => dispatch(onImportant(id));
  const clickLike = (id) => dispatch(onLike(id));
  return {
    clickDelete,
    clickImportant,
    clickLike,
  };
};
