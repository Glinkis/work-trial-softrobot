import fetch from "../misc/fetch";

export const ADD_ERROR = "ERROR";
export const ADD_UPDATING_ITEM = "ADD_UPDATING_ITEM";
export const REMOVE_UPDATING_ITEM = "REMOVE_UPDATING_ITEM";
export const REQUEST_ITEMS = "REQUEST_DATA";
export const RECEIVE_ITEMS = "RECEIVE_DATA";
export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const REQUEST_REJECTED = "REQUEST_REJECTED";

export const addError = error => ({
  type: ADD_ERROR,
  payload: error
});

export const addUpdatingItem = id => ({
  type: ADD_UPDATING_ITEM,
  payload: id
});

export const removeUpdatingItem = id => ({
  type: REMOVE_UPDATING_ITEM,
  payload: id
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
    dispatch(addError("Uh oh, there was a problem when getting the users."));
  }
};

export const fetchItems = () => async dispatch => {
  dispatch(requestItems());
  try {
    const items = await fetch("GET", "/getitems");
    dispatch(receiveItems(items));
  } catch (error) {
    dispatch(requestRejected());
    dispatch(addError("Uh oh, there was a problem when getting the items."));
  }
};

export const updateItem = item => async dispatch => {
  dispatch(addUpdatingItem(item.id));
  try {
    await fetch("PUT", "/putitem", item);
    dispatch(removeUpdatingItem(item.id));
  } catch (error) {
    dispatch(addError("Uh oh, there was a problem updating the item."));
  }
};
