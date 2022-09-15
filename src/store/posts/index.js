import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { label: "first", important: true, like: true, key: 0 },
  { label: "first2", important: false, like: false, key: 1 },
  { label: "first3", important: true, like: false, key: 2 },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        label: action.payload,
        important: false,
        like: false,
        key: new Date().getTime(),
      };
      state.push(newPost);
    },
    onDelete: (state, action) => {
      const post = state.findIndex((item) => item.key === action.payload);
      state.splice(post, 1);
    },
    onLike: (state, action) => {
      state.find((item) => item.key === action.payload).like = !state.find(
        (item) => item.key === action.payload
      ).like;
    },
    onImportant: (state, action) => {
      state.find((item) => item.key === action.payload).important = !state.find(
        (item) => item.key === action.payload
      ).important;
    },
  },
});

export const postsSliceActions = postsSlice.actions;
