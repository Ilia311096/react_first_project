import React from "react";
import "./search-panel.css";
import { searchTerm } from "../../store/posts/action";
import { useDispatch } from "react-redux";
function SearchPanel() {
  const dispatch = useDispatch();
  return (
    <input
      onChange={(e) => dispatch(searchTerm(e.target.value))}
      placeholder="search"
      className="form-control search-input"
      type="text"
    ></input>
  );
}

export default SearchPanel;
