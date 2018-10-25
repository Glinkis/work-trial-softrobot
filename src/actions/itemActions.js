// @ts-check
import fetch from "../utils/fetch";

export const ADD_UPDATING_ITEM = "ADD_UPDATING_ITEM";
export const REMOVE_UPDATING_ITEM = "REMOVE_UPDATING_ITEM";
export const ADD_FAILED_ITEM = "ADD_FAILED_ITEM";
export const REMOVE_FAILED_ITEM = "REMOVE_FAILED_ITEM";

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

export const updateItem = item => async dispatch => {
  const { id } = item;

  dispatch(removeFailedItem(id));
  dispatch(addUpdatingItem(id));

  try {
    await fetch("/putitem", { method: "PUT", body: item });
    dispatch(removeUpdatingItem(id));
  } catch (error) {
    dispatch(removeUpdatingItem(id));
    dispatch(addFailedItem(id));
  }
};
