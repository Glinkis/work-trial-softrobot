import { combineReducers } from "redux";
import requestReducer from "./requestReducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  request: requestReducer,
  item: itemReducer
});
