// @ts-check
/// <reference path="../types.d.ts" />
import createAction from "../utils/createAction";
import fetch from "../utils/fetch";

export const ADD_UPDATING_ITEM = "[item] ADD_UPDATING_ITEM";
export const REMOVE_UPDATING_ITEM = "[item] REMOVE_UPDATING_ITEM";
export const ADD_FAILED_ITEM = "[item] ADD_FAILED_ITEM";
export const REMOVE_FAILED_ITEM = "[item] REMOVE_FAILED_ITEM";
export const UPDATE_ITEM = "[item] UPDATE_ITEM";

/** @type {Action.<number>} */
export const addUpdatingItem = createAction(ADD_UPDATING_ITEM);

/** @type {Action.<number>} */
export const removeUpdatingItem = createAction(REMOVE_UPDATING_ITEM);

/** @type {Action.<number>} */
export const addFailedItem = createAction(ADD_FAILED_ITEM);

/** @type {Action.<number>} */
export const removeFailedItem = createAction(REMOVE_FAILED_ITEM);

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
