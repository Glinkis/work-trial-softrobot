// @ts-check
import { combineReducers } from "redux";
import requestReducer from "./requestReducer";
import itemReducer from "./itemReducer";
import tableReducer from "./tableReducer";

export default combineReducers({
  request: requestReducer,
  item: itemReducer,
  table: tableReducer
});
