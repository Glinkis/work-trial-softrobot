// @ts-check
/// <reference path="../types.d.ts" />
import createAction from "../utils/createAction";
import fetch from "../utils/fetch";

export const REQUEST_ERROR = "[request] REQUEST_ERROR";
export const REQUEST_ITEMS = "[request] REQUEST_ITEMS";
export const RECEIVE_ITEMS = "[request] RECEIVE_ITEMS";
export const REQUEST_USERS = "[request] REQUEST_USERS";
export const RECEIVE_USERS = "[request] RECEIVE_USERS";
export const REQUEST_REJECTED = "[request] REQUEST_REJECTED";

/** @type {Action<string>} */
export const requestError = createAction(REQUEST_ERROR);

/** @type {Action} */
export const requestItems = createAction(REQUEST_ITEMS);

/** @type {Action<Item[]>} */
export const receiveItems = createAction(RECEIVE_ITEMS);

/** @type {Action} */
export const requestUsers = createAction(REQUEST_USERS);

/** @type {Action<string[]>} */
export const receiveUsers = createAction(RECEIVE_USERS);

/** @type {Action} */
export const requestRejected = createAction(REQUEST_REJECTED);

export const fetchUsers = () => async dispatch => {
  dispatch(requestUsers());
  try {
    const users = await fetch("/getusers");
    dispatch(receiveUsers(users));
  } catch (error) {
    dispatch(requestRejected());
    dispatch(requestError("Uh oh, there was a problem getting the users."));
  }
};

export const fetchItems = () => async dispatch => {
  dispatch(requestItems());
  try {
    const items = await fetch("/getitems");
    dispatch(receiveItems(items));
  } catch (error) {
    dispatch(requestRejected());
    dispatch(requestError("Uh oh, there was a problem getting the items."));
  }
};
