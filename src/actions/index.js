import fetch from "../misc/fetch";

export const ADD_ERROR = "ERROR";
export const REQUEST_ITEMS = "REQUEST_DATA";
export const RECEIVE_ITEMS = "RECEIVE_DATA";
export const REQUEST_USERS = "REQUEST_USERTS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const addError = error => ({
  type: ADD_ERROR,
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

export const fetchUsers = () => async dispatch => {
  dispatch(requestUsers());
  try {
    const result = await fetch("GET", "/getusers");
    const users = JSON.parse(result);
    dispatch(receiveUsers(users));
  } catch (error) {
    dispatch(addError("Uh oh, there was a problem when getting the users."));
  }
};

export const fetchItems = () => async dispatch => {
  dispatch(requestItems());
  try {
    const result = await fetch("GET", "/getitems");
    const items = JSON.parse(result);
    dispatch(receiveItems(items));
  } catch (error) {
    dispatch(addError("Uh oh, there was a problem when getting the items."));
  }
};
