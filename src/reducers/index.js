// @ts-check
import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import requestReducer from "./requestReducer";
import tableReducer from "./tableReducer";

export default combineReducers({
  request: requestReducer,
  item: itemReducer,
  table: tableReducer
});
