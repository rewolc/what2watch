import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import serialReducer from "./serials/serial-reducer";
import tytleReducer from "./tytles/tytles-reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["tytle"],
};

const rootReducer = combineReducers({
	serial: serialReducer,
	tytle: tytleReducer,
});

export default persistReducer(persistConfig, rootReducer);
