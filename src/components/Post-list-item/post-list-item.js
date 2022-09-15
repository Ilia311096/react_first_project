import React from "react";
import "./post-list-item.css";

export function PostListItem({
  id,
  label,
  onDelete,
  onImportant,
  onLike,
  like,
  important,
}) {
  const baseclasses = "app-list-item d-flex justify-content-between";
  const a = important ? baseclasses + " important" : baseclasses;
  const b = like ? a + " like" : a;
  return (
    <div className={b}>
      <span onClick={() => onLike(id)} className="app-list-item-label">
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm"
          onClick={() => onImportant(id)}
        >
          <i className="fa fa-star"></i>
        </button>
        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={() => onDelete(id)}
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
}
