import { PostListItemContainer } from "../../containers/PostListItemContainer";
export const PostList = ({ posts }) => {
  return posts.map((post) => (
    <PostListItemContainer post={post} key={post.key} />
  ));
};
