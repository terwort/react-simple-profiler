import { combineReducers } from "redux";
import constants from "../Store/constants";

export const recordsReducer = (state = [], action) => {
	const { type, record } = action;

	if (type === constants.ADD_RECORD) {
		return [...state, record];
	}

	return state;
};
const rootReducers = combineReducers({
	records: recordsReducer
});

export default rootReducers;
