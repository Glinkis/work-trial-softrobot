// @ts-check
import {
  ADD_FAILED_ITEM,
  ADD_UPDATING_ITEM,
  REMOVE_FAILED_ITEM,
  REMOVE_UPDATING_ITEM
} from "../actions/itemActions";

/** @type {ItemReducer<number>} */
const addUpdatingItem = (state, payload) => ({
  ...state,
  updating: [...state.updating, payload]
});

/** @type {ItemReducer<number>} */
const removeUpdatingItem = (state, payload) => ({
  ...state,
  updating: state.updating.filter(id => id !== payload)
});

/** @type {ItemReducer<number>} */
const addFailedItem = (state, payload) => ({
  ...state,
  failed: [...state.failed, payload]
});

/** @type {ItemReducer<number>} */
const removeFailedItem = (state, payload) => ({
  ...state,
  failed: state.failed.filter(id => id !== payload)
});

/** @type {ItemState} */
const defaultState = {
  updating: [],
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
