import { SORT_TABLE } from "../actions/sortActions";

const sortTable = (state, { payload }) => {
  if (state.name === payload && state.direction === "up") {
    return { name: payload, direction: "down" };
  }

  if (state.name === payload && state.direction === "down") {
    return { name: "", direction: "" };
  }

  return { name: payload, direction: "up" };
};

const defaultState = {
  name: "",
  direction: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SORT_TABLE:
      return sortTable(state, action);
  }
  return state;
};
