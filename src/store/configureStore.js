import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers/reducers";

const configureStore = preloadedState =>
  createStore(rootReducers, preloadedState, applyMiddleware(thunk));

export default configureStore;
