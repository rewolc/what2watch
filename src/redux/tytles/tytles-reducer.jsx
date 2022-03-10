import "./tytles.types";
import TytlesAction from "./tytles.types";
import { removeFilm } from "./tytles.action";
const INITIAL_STATE = {
  names: '',
  tytles: [],
};

const tytleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SERIAL":
      return {
        ...state,
        tytles: [...state.tytles, action.payload],
      };
      case TytlesAction.REMOVE_FILM :
        return{
          ...state,
          tytles: removeFilm(state,action.payload)
        }
        case 'HELP_SET' :
          return {
            ...state,
            names: [action.payload]
          }
    default:
      return state;
  }
};

export default tytleReducer;
