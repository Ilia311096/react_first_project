import React from "react";
import "./search-panel.css";
import { termSliceActions } from "../../store/term";
import { useDispatch } from "react-redux";
export function SearchPanel() {
  const dispatch = useDispatch();
  return (
    <input
      onChange={(e) => dispatch(termSliceActions.searchTerm(e.target.value))}
      placeholder="search"
      className="form-control search-input"
      type="text"
    ></input>
  );
}
