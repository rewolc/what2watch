import "./serial.types";
import SerialAction from "./serial.types";
const INITIAL_STATE = {
	serials: [],
};

const serialReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SerialAction.ADD_SERIAL:
			return {
				...state,
				serials: action.payload,
			};
		default:
			return state;
	}
};
export default serialReducer;
