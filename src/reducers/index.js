import {
  ADD_UPDATING_ITEM,
  REMOVE_UPDATING_ITEM,
  ADD_FAILED_ITEM,
  REMOVE_FAILED_ITEM,
  REQUEST_ERROR,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  REQUEST_USERS,
  RECEIVE_USERS,
  REQUEST_REJECTED
} from "../actions";

const addUpdatingItem = (state, { payload }) => ({
  ...state,
  updatingItems: [...state.updatingItems, payload]
});

const removeUpdatingItem = (state, { payload }) => ({
  ...state,
  updatingItems: [...state.updatingItems.filter(id => id !== payload)]
});

const addFailedItem = (state, { payload }) => ({
  ...state,
  failedItems: [...state.failedItems, payload]
});

const removeFailedItem = (state, { payload }) => ({
  ...state,
  failedItems: [...state.failedItems.filter(id => id !== payload)]
});

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
  items: [],
  updatingItems: [],
  failedItems: []
};

const reducer = (state = defaultState, action) => {
  console.log(action.type, state);
  switch (action.type) {
    case ADD_UPDATING_ITEM:
      return addUpdatingItem(state, action);
    case REMOVE_UPDATING_ITEM:
      return removeUpdatingItem(state, action);
    case ADD_FAILED_ITEM:
      return addFailedItem(state, action);
    case REMOVE_FAILED_ITEM:
      return removeFailedItem(state, action);
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

export default reducer;
