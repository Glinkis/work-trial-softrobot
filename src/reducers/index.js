import {
  ADD_ERROR,
  ADD_UPDATING_ITEM,
  REMOVE_UPDATING_ITEM,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  REQUEST_USERS,
  RECEIVE_USERS
} from "../actions";

const addError = (state, { payload }) => ({
  ...state,
  errors: [...(state.errors || []), payload]
});

const addUpdatingItem = (state, { payload }) => ({
  ...state,
  updatingItems: [...(state.updatingItems || []), payload]
});

const removeUpdatingItem = (state, { payload }) => ({
  ...state,
  updatingItems: [...(state.updatingItems || []).filter(id => id !== payload)]
});

const requestItems = state => ({
  ...state,
  isFetching: true,
  errors: false
});

const receiveItems = (state, { payload }) => ({
  ...state,
  isFetching: !state.users,
  errors: false,
  items: [...payload]
});

const requestUsers = state => ({
  ...state,
  isFetching: true,
  errors: false
});

const receiveUsers = (state, { payload }) => ({
  ...state,
  isFetching: !state.items,
  errors: false,
  users: [...payload]
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return addError(state, action);
    case ADD_UPDATING_ITEM:
      return addUpdatingItem(state, action);
    case REMOVE_UPDATING_ITEM:
      return removeUpdatingItem(state, action);
    case REQUEST_ITEMS:
      return requestItems(state);
    case RECEIVE_ITEMS:
      return receiveItems(state, action);
    case REQUEST_USERS:
      return requestUsers(state);
    case RECEIVE_USERS:
      return receiveUsers(state, action);
  }
  return state;
};

export default reducer;
