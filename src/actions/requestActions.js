// @ts-check
/// <reference path="../types.d.ts" />

import fetch from "../utils/fetch";

export const REQUEST_ERROR = "[request] REQUEST_ERROR";
export const REQUEST_ITEMS = "[request] REQUEST_ITEMS";
export const RECEIVE_ITEMS = "[request] RECEIVE_ITEMS";
export const REQUEST_USERS = "[request] REQUEST_USERS";
export const RECEIVE_USERS = "[request] RECEIVE_USERS";
export const REQUEST_REJECTED = "[request] REQUEST_REJECTED";

/** @param {string} error */
export const requestError = error => ({
  type: REQUEST_ERROR,
  payload: error
});

export const requestItems = () => ({
  type: REQUEST_ITEMS
});

/** @param {Item[]} items */
export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  payload: items
});

export const requestUsers = () => ({
  type: REQUEST_USERS
});

/** @param {string[]} users */
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
