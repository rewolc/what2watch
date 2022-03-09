import "./tytles.types";
import TytlesAction from "./tytles.types";


const INITIAL_STATE = {
  tytles: [],
};

const tytleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SERIAL":
      return {
        ...state,
        tytles: [...state.tytles, action.payload],
      };
    default:
      return state;
  }
};

export default tytleReducer;
