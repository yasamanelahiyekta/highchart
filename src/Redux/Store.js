import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { users } from "./Reducer"
const reducers = combineReducers({ users });
const middleWare = [thunk];
const Store = createStore(reducers, applyMiddleware(...middleWare))
export default Store