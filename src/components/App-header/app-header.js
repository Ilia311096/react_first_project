import React from "react";
import "./app-header.css";
import { selectAmount } from "../../store/amount/selector";
import { selectPosts } from "../../store/posts/selector";
import { useSelector } from "react-redux";
const AppHeader = () => {
  const postLenght = useSelector(selectAmount);
  const finalPosts = useSelector(selectPosts);
  const liked = finalPosts.filter((item) => item.like).length;
  return (
    <div className="d-flex app-header">
      <h1>Ilia Kazakov</h1>
      <h2>
        Liked {liked} of {postLenght}
      </h2>
    </div>
  );
};
export default AppHeader;
