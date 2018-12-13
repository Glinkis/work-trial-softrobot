/// <reference path="../types.d.ts" />
import {
  SET_TABLE_PAGE,
  SET_TABLE_ROW,
  SORT_TABLE
} from "../actions/tableActions";

/** @type {TableReducer<string>} */
const sortTable = (state, payload) => {
  if (state.name === payload && state.direction === "up") {
    return { ...state, name: payload, direction: "down" };
  }

  if (state.name === payload && state.direction === "down") {
    return { ...state, name: "", direction: "" };
  }

  return { ...state, name: payload, direction: "up" };
};

/** @type {TableReducer<number>} */
const setTableRows = (state, payload) => ({
  ...state,
  rows: payload < 0 ? 0 : payload
});

/** @type {TableReducer<number>} */
const setTablePage = (state, payload) => ({
  ...state,
  page: payload < 0 ? 0 : payload
});

/** @type {TableState} */
const defaultState = {
  name: "",
  direction: "",
  rows: 10,
  page: 0
};

/** @type {(state: TableState | undefined, action: any) => TableState} */
export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case SORT_TABLE:
      return sortTable(state, payload);
    case SET_TABLE_ROW:
      return setTableRows(state, payload);
    case SET_TABLE_PAGE:
      return setTablePage(state, payload);
  }
  return state;
}
