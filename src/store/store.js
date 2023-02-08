import { combineReducers, createStore, applyMiddleware } from "redux";
import { roleReducer } from "../reducers/role";
import logger from "redux-logger";

const rootReducer = combineReducers({
  role:roleReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;