import { REQUEST_DATA, RECEIVE_DATA } from "../actions";

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
    case REQUEST_DATA:
      return requestData(state);
    case RECEIVE_DATA:
      return receiveData(state, action);
  }
  return state;
};

export default reducer;
