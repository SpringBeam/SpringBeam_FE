import { combineReducers, createStore, applyMiddleware } from "redux";
import { roleReducer } from "../reducers/role";
import { userReducer } from "../reducers/user";
import logger from "redux-logger";

const rootReducer = combineReducers({
  role: roleReducer,
  user: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;