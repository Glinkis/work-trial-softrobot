import { SORT_TABLE, SET_TABLE_ROW_AMOUNT } from "../actions/tableActions";

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
  }
  return state;
};
