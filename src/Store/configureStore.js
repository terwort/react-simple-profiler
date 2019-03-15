import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../Reducers/reducers";

const configureStore = preloadedState =>
	createStore(rootReducers, preloadedState, applyMiddleware(thunk));

export default configureStore;
