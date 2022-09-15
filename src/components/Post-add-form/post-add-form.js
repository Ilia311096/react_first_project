import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./post-add-form.css";
import { postsSliceActions } from "../../store/posts";

export function PostAddForm() {
  const [newPost, setNewPost] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="bottom-panel d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(postsSliceActions.addPost(newPost));
        return setNewPost("");
      }}
    >
      <input
        placeholder="write"
        onChange={(e) => {
          setNewPost(e.target.value);
        }}
        className="form-control new-post-label"
        value={newPost}
      ></input>
      <button type="submit" className="btn btn-outline-secondary">
        add post
      </button>
    </form>
  );
}
