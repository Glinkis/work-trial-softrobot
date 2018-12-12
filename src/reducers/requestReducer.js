// @ts-check
import { UPDATE_ITEM } from "../actions/itemActions";
import {
  RECEIVE_ITEMS,
  RECEIVE_USERS,
  REQUEST_ERROR,
  REQUEST_ITEMS,
  REQUEST_REJECTED,
  REQUEST_USERS
} from "../actions/requestActions";

/** @param {typeof defaultState} state */
const requestError = (state, payload) => ({
  ...state,
  errors: [...state.errors, payload]
});

/** @param {typeof defaultState} state */
const requestItems = state => ({
  ...state,
  errors: [],
  openRequests: state.openRequests + 1
});

/** @param {typeof defaultState} state */
const requestUsers = state => ({
  ...state,
  errors: [],
  openRequests: state.openRequests + 1
});

/** @param {typeof defaultState} state */
const receiveItems = (state, payload) => {
  const openRequests = state.openRequests - 1;
  return {
    ...state,
    openRequests,
    errors: openRequests ? [...state.errors] : [],
    items: [...payload]
  };
};

/** @param {typeof defaultState} state */
const receiveUsers = (state, payload) => {
  const openRequests = state.openRequests - 1;
  return {
    ...state,
    openRequests,
    errors: openRequests ? [...state.errors] : [],
    users: [...payload]
  };
};

/** @param {typeof defaultState} state */
const requestRejected = state => ({
  ...state,
  openRequests: state.openRequests - 1
});

/** @param {typeof defaultState} state */
const updateItem = ({ items, ...rest }, payload) => ({
  ...rest,
  items:
    payload.id >= items.length
      ? [...items, payload]
      : items.map(item => (item.id === payload.id ? payload : item))
});

const defaultState = {
  /** @type {number} */
  openRequests: 0,
  /** @type {string[]} */
  errors: [],
  /** @type {string[]} */
  users: [],
  /** @type {Item[]} */
  items: []
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case REQUEST_ERROR:
      return requestError(state, payload);
    case REQUEST_ITEMS:
      return requestItems(state);
    case RECEIVE_ITEMS:
      return receiveItems(state, payload);
    case REQUEST_USERS:
      return requestUsers(state);
    case RECEIVE_USERS:
      return receiveUsers(state, payload);
    case REQUEST_REJECTED:
      return requestRejected(state);
    case UPDATE_ITEM:
      return updateItem(state, payload);
  }
  return state;
};
