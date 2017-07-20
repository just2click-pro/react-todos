import * as Constants from "../actions/constants";

export default function errorsReducer(state = [], action) {
	switch (action.type) {
		case Constants.ERROR_EMPTY:
			return [...state, action.message];
	}

	return state;
}