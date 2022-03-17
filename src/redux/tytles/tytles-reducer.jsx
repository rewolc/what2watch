import "./tytles.types";
import TytlesAction from "./tytles.types";
import { addToFav, delFav,checkFav } from "./tytles.changes";
const INITIAL_STATE = {
  names: "",
  tytles: [],
};

const tytleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SERIAL":
      return {
        ...state,
        tytles: [...state.tytles, action.payload],
      };
    case TytlesAction.ADD_FILM:
      return {
        ...state,
        tytles: [...state.tytles, action.payload],
      };
    case TytlesAction.REMOVE_FILM:
      return {
        ...state,
        names: "",
        tytles: state.tytles.filter((i) => i.filmId !== action.payload),
      };
    case "HELP_SET":
      return {
        ...state,
        names: [action.payload],
      };
    case TytlesAction.ADD_FAV:
      return {
        ...state,
        tytles: addToFav(state.tytles, action.payload),
      };
    case TytlesAction.DEL_FAV:
      return {
        ...state,
        tytles: delFav(state.tytles, action.payload),
      };
    case TytlesAction.CHECK_FAV:
      return {
        ...state,
        tytles: checkFav(state.tytles)
      };
    default:
      return state;
  }
};

export default tytleReducer;
