import { PostList } from "../components/Post-list/post-list";
import { useDispatch, useSelector } from "react-redux";
import "../components/Post-list/post-list.css";
import { selectPosts } from "../store/posts/selector";
import { selectTerm } from "../store/term/selector";
import { selectFilter } from "../store/filter/selector";
import { amountPosts } from "../store/amount/action";

export const PostListContainer = () => {
  const postsFromState = useSelector(selectPosts);
  const term = useSelector(selectTerm);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const searchPost = (term, items) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };
  const postsAfterSearch = searchPost(term, postsFromState);

  const filterPosts = (filter, data) => {
    if (filter === "all") {
      return data;
    }
    return data.filter(({ like }) => {
      return like;
    });
  };
  const postsAfterFilter = filterPosts(filter, postsAfterSearch);

  const posts = postsAfterFilter;
  dispatch(amountPosts(posts.length));
  return (
    <ul className="app-list list-group">
      <PostList posts={posts} />
    </ul>
  );
};
