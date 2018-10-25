// @ts-check
import { combineReducers } from "redux";
import requestReducer from "./requestReducer";
import itemReducer from "./itemReducer";
import sortReducer from "./tableReducer";

export default combineReducers({
  request: requestReducer,
  item: itemReducer,
  sort: sortReducer
});
