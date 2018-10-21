import { ADD_ERROR, REQUEST_DATA, RECEIVE_DATA } from "../actions";

const addError = (state, { error }) => ({
  ...state,
  errors: [...(state.errors || []), error]
});

const requestData = state => ({
  ...state,
  isFetching: true
});

const receiveData = (state, { items }) => ({
  ...state,
  isFetching: false,
  items: [...items]
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return addError(state, action);
    case REQUEST_DATA:
      return requestData(state);
    case RECEIVE_DATA:
      return receiveData(state, action);
  }
  return state;
};

export default reducer;
