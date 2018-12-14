// @ts-check
/// <reference path="../types.d.ts" />
import * as itemActions from "../actions/itemActions";

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

/** @type {(state: ItemState | undefined, action: any) => ItemState} */
export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case itemActions.ADD_UPDATING_ITEM:
      return addUpdatingItem(state, payload);
    case itemActions.REMOVE_UPDATING_ITEM:
      return removeUpdatingItem(state, payload);
    case itemActions.ADD_FAILED_ITEM:
      return addFailedItem(state, payload);
    case itemActions.REMOVE_FAILED_ITEM:
      return removeFailedItem(state, payload);
  }
  return state;
}
