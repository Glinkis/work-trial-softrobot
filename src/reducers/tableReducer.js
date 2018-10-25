import {
  SORT_TABLE,
  SET_TABLE_ROW_AMOUNT,
  SET_TABLE_PAGE
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

const setTableRowAmount = (state, { payload }) => ({
  ...state,
  rows: payload
});

const setTablePage = (state, { payload }) => ({
  ...state,
  page: payload
});

const defaultState = {
  name: "",
  direction: "",
  rows: 20
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SORT_TABLE:
      return sortTable(state, action);
    case SET_TABLE_ROW_AMOUNT:
      return setTableRowAmount(state, action);
    case SET_TABLE_PAGE:
      return setTablePage(state, action);
  }
  return state;
};
