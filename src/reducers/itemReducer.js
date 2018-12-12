// @ts-check
import {
  ADD_FAILED_ITEM,
  ADD_UPDATING_ITEM,
  REMOVE_FAILED_ITEM,
  REMOVE_UPDATING_ITEM
} from "../actions/itemActions";

/** @param {typeof defaultState} state */
const addUpdatingItem = (state, payload) => ({
  ...state,
  updating: [...state.updating, payload]
});

/** @param {typeof defaultState} state */
const removeUpdatingItem = (state, payload) => ({
  ...state,
  updating: state.updating.filter(id => id !== payload)
});

/** @param {typeof defaultState} state */
const addFailedItem = (state, payload) => ({
  ...state,
  failed: [...state.failed, payload]
});

/** @param {typeof defaultState} state */
const removeFailedItem = (state, payload) => ({
  ...state,
  failed: state.failed.filter(id => id !== payload)
});

const defaultState = {
  /** @type {number[]} */
  updating: [],
  /** @type {number[]} */
  failed: []
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_UPDATING_ITEM:
      return addUpdatingItem(state, payload);
    case REMOVE_UPDATING_ITEM:
      return removeUpdatingItem(state, payload);
    case ADD_FAILED_ITEM:
      return addFailedItem(state, payload);
    case REMOVE_FAILED_ITEM:
      return removeFailedItem(state, payload);
  }
  return state;
};
