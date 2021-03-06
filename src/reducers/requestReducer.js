// @ts-check
/// <reference path="../types.d.ts" />
import * as itemActions from "../actions/itemActions";
import * as requestActions from "../actions/requestActions";

/** @type {RequestReducer.<string>} */
const requestError = (state, payload) => ({
  ...state,
  errors: [...state.errors, payload]
});

/** @type {RequestReducer} */
const requestItems = state => ({
  ...state,
  errors: [],
  openRequests: state.openRequests + 1
});

/** @type {RequestReducer} */
const requestUsers = state => ({
  ...state,
  errors: [],
  openRequests: state.openRequests + 1
});

/** @type {RequestReducer.<Item[]>} */
const receiveItems = (state, payload) => {
  const openRequests = state.openRequests - 1;
  return {
    ...state,
    openRequests,
    errors: openRequests ? [...state.errors] : [],
    items: [...payload]
  };
};

/** @type {RequestReducer.<string[]>} */
const receiveUsers = (state, payload) => {
  const openRequests = state.openRequests - 1;
  return {
    ...state,
    openRequests,
    errors: openRequests ? [...state.errors] : [],
    users: [...payload]
  };
};

/** @type {RequestReducer} */
const requestRejected = state => ({
  ...state,
  openRequests: state.openRequests - 1
});

/** @type {RequestReducer.<Item>} */
const updateItem = ({ items, ...rest }, payload) => ({
  ...rest,
  items:
    payload.id >= items.length
      ? [...items, payload]
      : items.map(item => (item.id === payload.id ? payload : item))
});

/** @type {RequestState} */
const defaultState = {
  openRequests: 0,
  errors: [],
  users: [],
  items: []
};

/** @type {(state: RequestState | undefined, action: any) => RequestState} */
export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case requestActions.REQUEST_ERROR:
      return requestError(state, payload);
    case requestActions.REQUEST_ITEMS:
      return requestItems(state);
    case requestActions.RECEIVE_ITEMS:
      return receiveItems(state, payload);
    case requestActions.REQUEST_USERS:
      return requestUsers(state);
    case requestActions.RECEIVE_USERS:
      return receiveUsers(state, payload);
    case requestActions.REQUEST_REJECTED:
      return requestRejected(state);
    case itemActions.UPDATE_ITEM:
      return updateItem(state, payload);
  }
  return state;
}
