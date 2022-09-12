import React from "react";
//import { useAppHook } from "../../hooks/AppHook";
//import { constData } from "../../const/constData";
import AppHeader from "../App-header/app-header";
import SearchPanel from "../Search-panel/search-panel";
import PostStatus from "../Post-status/post-status-filter";
import { PostListContainer } from "../../containers/PostListContainer";
import PostAddForm from "../Post-add-form/post-add-form";
import { Provider } from "react-redux";
import { store } from "../../store";
import "./app.css";

export function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatus />
        </div>
        <PostListContainer />
        <PostAddForm />
      </div>
    </Provider>
  );
}
