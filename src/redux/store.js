import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { mySaga } from "./sagas/sagas";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, ...middlewares)
);
sagaMiddleware.run(mySaga);
export const persistor = persistStore(store);
export default { store, persistor };
