import fetch from "../misc/fetch";

export const ADD_UPDATING_ITEM = "ADD_UPDATING_ITEM";
export const REMOVE_UPDATING_ITEM = "REMOVE_UPDATING_ITEM";
export const ADD_FAILED_ITEM = "ADD_FAILED_ITEM";
export const REMOVE_FAILED_ITEM = "REMOVE_FAILED_ITEM";
export const REQUEST_ERROR = "ADD_REQUEST_ERROR";
export const REQUEST_ITEMS = "REQUEST_DATA";
export const RECEIVE_ITEMS = "RECEIVE_DATA";
export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const REQUEST_REJECTED = "REQUEST_REJECTED";

export const addUpdatingItem = id => ({
  type: ADD_UPDATING_ITEM,
  payload: id
});

export const removeUpdatingItem = id => ({
  type: REMOVE_UPDATING_ITEM,
  payload: id
});

export const addFailedItem = id => ({
  type: ADD_FAILED_ITEM,
  payload: id
});

export const removeFailedItem = id => ({
  type: REMOVE_FAILED_ITEM,
  payload: id
});

export const requestError = error => ({
  type: REQUEST_ERROR,
  payload: error
});

export const requestItems = () => ({
  type: REQUEST_ITEMS
});

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  payload: items
});

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  payload: users
});

export const requestRejected = () => ({
  type: REQUEST_REJECTED
});

export const fetchUsers = () => async dispatch => {
  dispatch(requestUsers());
  try {
    const users = await fetch("GET", "/getusers");
    dispatch(receiveUsers(users));
  } catch (error) {
    dispatch(requestRejected());
    dispatch(requestError("Uh oh, there was a problem getting the users."));
  }
};

export const fetchItems = () => async dispatch => {
  dispatch(requestItems());
  try {
    const items = await fetch("GET", "/getitems");
    dispatch(receiveItems(items));
  } catch (error) {
    dispatch(requestRejected());
    dispatch(requestError("Uh oh, there was a problem getting the items."));
  }
};

export const updateItem = item => async dispatch => {
  dispatch(removeFailedItem(item.id));
  dispatch(addUpdatingItem(item.id));
  try {
    await fetch("PUT", "/putitem", item);
    dispatch(removeUpdatingItem(item.id));
  } catch (error) {
    dispatch(addFailedItem(item.id));
  }
};
