import React from "react";
import { useDispatch } from "react-redux";
import "./post-status-filter.css";
import { filterSliceActions } from "../../store/filter";
export function PostStatus({ filter, getFilter }) {
  const dispatch = useDispatch();
  const buttons = [
    { name: "all", label: "all" },
    { name: "like", label: "liked" },
  ];
  return (
    <div className="btn-group">
      {buttons.map(({ name, label }) => {
        const active = filter === name;
        const classes = active ? "btn-info" : "btn-outline-secondary";
        return (
          <button
            onClick={() => dispatch(filterSliceActions.filterPosts(name))}
            key={name}
            type="button"
            className={`btn ${classes}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
