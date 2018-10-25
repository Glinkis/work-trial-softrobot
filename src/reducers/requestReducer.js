// @ts-check
import {
  REQUEST_ERROR,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  REQUEST_USERS,
  RECEIVE_USERS,
  REQUEST_REJECTED
} from "../actions/requestActions";
import { UPDATE_ITEM } from "../actions/itemActions";

const requestError = (state, { payload }) => ({
  ...state,
  errors: [...state.errors, payload]
});

const requestItems = state => ({
  ...state,
  errors: [],
  openRequests: state.openRequests + 1
});

const requestUsers = state => ({
  ...state,
  errors: [],
  openRequests: state.openRequests + 1
});

const receiveItems = (state, { payload }) => {
  const openRequests = state.openRequests - 1;
  return {
    ...state,
    openRequests,
    errors: openRequests ? [...state.errors] : [],
    items: payload.map(item => ({ ...item }))
  };
};

const receiveUsers = (state, { payload }) => {
  const openRequests = state.openRequests - 1;
  return {
    ...state,
    openRequests,
    errors: openRequests ? [...state.errors] : [],
    users: [...payload]
  };
};

const requestRejected = state => ({
  ...state,
  openRequests: state.openRequests - 1
});

const updateItem = (state, { payload }) => ({
  ...state,
  items: state.items.map(
    item => (item.id === payload.id ? { ...payload } : { ...item })
  )
});

const defaultState = {
  openRequests: 0,
  errors: [],
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
    case UPDATE_ITEM:
      return updateItem(state, action);
  }
  return state;
};
