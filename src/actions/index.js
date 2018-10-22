import fetch from "../misc/fetch";

export const ADD_ERROR = "ERROR";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const EDIT_ROW = "EDIT_ROW";
export const CANCEL_EDIT = "CANCEL_EDIT";

export const addError = error => ({
  type: ADD_ERROR,
  error
});

export const requestData = () => ({
  type: REQUEST_DATA
});

export const receiveData = items => ({
  type: RECEIVE_DATA,
  items
});

export const editRow = row => ({
  type: EDIT_ROW,
  editableRow: row
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT
});

export const fetchItems = () => async dispatch => {
  dispatch(requestData());

  let items;
  try {
    const result = await fetch("GET", "/getitems");
    items = JSON.parse(result);
  } catch (error) {
    dispatch(addError("Could not get items."));
    return;
  }

  let users;
  try {
    const result = await fetch("GET", "/getusers");
    users = JSON.parse(result);
  } catch (error) {
    dispatch(addError("Could not get users."));
    return;
  }

  dispatch(
    receiveData(
      items.map(({ id, text, date, userId, active }) => ({
        id,
        date: date.slice(0, 10),
        text,
        owner: users[userId],
        status: active
      }))
    )
  );
};
