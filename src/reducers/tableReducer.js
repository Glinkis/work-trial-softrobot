import {
  SET_TABLE_PAGE,
  SET_TABLE_ROW,
  SORT_TABLE
} from "../actions/tableActions";

const sortTable = (state, { payload }) => {
  if (state.name === payload && state.direction === "up") {
    return { ...state, name: payload, direction: "down" };
  }

  if (state.name === payload && state.direction === "down") {
    return { ...state, name: "", direction: "" };
  }

  return { ...state, name: payload, direction: "up" };
};

const setTableRows = (state, { payload }) => ({
  ...state,
  rows: payload < 0 ? 0 : payload
});

const setTablePage = (state, { payload }) => ({
  ...state,
  page: payload < 0 ? 0 : payload
});

const defaultState = {
  name: "",
  direction: "",
  rows: 10,
  page: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SORT_TABLE:
      return sortTable(state, action);
    case SET_TABLE_ROW:
      return setTableRows(state, action);
    case SET_TABLE_PAGE:
      return setTablePage(state, action);
  }
  return state;
};
