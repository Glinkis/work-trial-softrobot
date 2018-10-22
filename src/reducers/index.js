import {
  ADD_ERROR,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  REQUEST_USERS,
  RECEIVE_USERS
} from "../actions";

const addError = (state, { payload }) => ({
  ...state,
  errors: [...(state.errors || []), payload]
});

const requestItems = state => ({
  ...state,
  isFetching: true
});

const receiveItems = ({ isFetching, errors, ...rest }, { payload }) => ({
  ...rest,
  items: [...payload]
});

const requestUsers = state => ({
  ...state,
  isFetching: true
});

const receiveUsers = ({ isFetching, errors, ...rest }, { payload }) => ({
  ...rest,
  users: [...payload]
});

const reducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_ERROR:
      return addError(state, action);
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
