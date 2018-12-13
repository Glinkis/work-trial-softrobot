// @ts-check
/// <reference path="../types.d.ts" />

import fetch from "../utils/fetch";

export const ADD_UPDATING_ITEM = "[item] ADD_UPDATING_ITEM";
export const REMOVE_UPDATING_ITEM = "[item] REMOVE_UPDATING_ITEM";
export const ADD_FAILED_ITEM = "[item] ADD_FAILED_ITEM";
export const REMOVE_FAILED_ITEM = "[item] REMOVE_FAILED_ITEM";
export const UPDATE_ITEM = "[item] UPDATE_ITEM";

/** @param {number} id */
export const addUpdatingItem = id => ({
  type: ADD_UPDATING_ITEM,
  payload: id
});

/** @param {number} id */
export const removeUpdatingItem = id => ({
  type: REMOVE_UPDATING_ITEM,
  payload: id
});

/** @param {number} id */
export const addFailedItem = id => ({
  type: ADD_FAILED_ITEM,
  payload: id
});

/** @param {number} id */
export const removeFailedItem = id => ({
  type: REMOVE_FAILED_ITEM,
  payload: id
});

/** @param {Item} item */
export const updateItem = item => async dispatch => {
  const { id } = item;

  dispatch(removeFailedItem(id));
  dispatch(addUpdatingItem(id));

  try {
    await fetch("/putitem", { method: "PUT", body: item });
    dispatch({ type: UPDATE_ITEM, payload: item });
    dispatch(removeUpdatingItem(id));
  } catch (error) {
    dispatch(removeUpdatingItem(id));
    dispatch(addFailedItem(id));
  }
};
