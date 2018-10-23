import {
  REQUEST_ERROR,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  REQUEST_USERS,
  RECEIVE_USERS,
  REQUEST_REJECTED
} from "../actions/requestActions";

const requestError = (state, { payload }) => ({
  ...state,
  errors: [...state.errors, payload]
});

const requestItems = state => ({
  ...state,
  errors: [],
  isFetching: state.isFetching + 1
});

const requestUsers = state => ({
  ...state,
  errors: [],
  isFetching: state.isFetching + 1
});

const receiveItems = (state, { payload }) => {
  const isFetching = state.isFetching - 1;
  return {
    ...state,
    isFetching,
    errors: isFetching ? [...state.errors] : [],
    items: [...payload]
  };
};

const receiveUsers = (state, { payload }) => {
  const isFetching = state.isFetching - 1;
  return {
    ...state,
    isFetching,
    errors: isFetching ? [...state.errors] : [],
    users: [...payload]
  };
};

const requestRejected = state => ({
  ...state,
  isFetching: state.isFetching - 1
});

const defaultState = {
  errors: [],
  isFetching: 0,
  users: [],
  items: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ERROR:
      return requestError(state, action);
    case REQUEST_ITEMS:
      return requestItems(state);
    case RECEIVE_ITEMS:
      return receiveItems(state, action);
    case REQUEST_USERS:
      return requestUsers(state);
    case RECEIVE_USERS:
      return receiveUsers(state, action);
    case REQUEST_REJECTED:
      return requestRejected(state);
  }
  return state;
};
