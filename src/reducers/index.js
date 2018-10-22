import {
  ADD_ERROR,
  REQUEST_DATA,
  RECEIVE_DATA,
  EDIT_ROW,
  CANCEL_EDIT
} from "../actions";

const addError = (state, { error }) => ({
  ...state,
  errors: [...(state.errors || []), error]
});

const requestData = state => ({
  ...state,
  errors: false,
  isFetching: true
});

const receiveData = (state, { items }) => ({
  ...state,
  isFetching: false,
  items: [...items]
});

const editRow = (state, { editableRow }) => ({
  ...state,
  editableRow
});

const cancelEdit = ({ editableRow, ...rest }) => ({
  ...rest
});

const reducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_ERROR:
      return addError(state, action);
    case REQUEST_DATA:
      return requestData(state);
    case RECEIVE_DATA:
      return receiveData(state, action);
    case EDIT_ROW:
      return editRow(state, action);
    case CANCEL_EDIT:
      return cancelEdit(state);
  }
  return state;
};

export default reducer;
