import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadingBarMiddleware } from "react-redux-loading-bar";

import reducers from "./rootReducers";
const initialState = {};

const store = createStore(
  combineReducers(reducers),
  initialState,
  // composeWithDevTools(applyMiddleware(thunk, loadingBarMiddleware()))
  applyMiddleware(thunk, loadingBarMiddleware())
);

export default store;
