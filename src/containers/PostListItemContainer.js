import PostListItem from "../components/Post-list-item/post-list-item";
import { useFunctionsForItem } from "../hooks/useFunctionsForItem";

export const PostListItemContainer = ({ post }) => {
  const { clickDelete, clickImportant, clickLike } = useFunctionsForItem();

  if (!post) {
    return null;
  }

  const { label, important, like, key } = post;

  return (
    <li style={{ listStyleType: "none" }}>
      <PostListItem
        label={label}
        important={important}
        like={like}
        id={key}
        onDelete={clickDelete}
        onImportant={clickImportant}
        onLike={clickLike}
      />
    </li>
  );
};
