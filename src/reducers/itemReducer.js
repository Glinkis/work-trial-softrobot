import {
  ADD_UPDATING_ITEM,
  REMOVE_UPDATING_ITEM,
  ADD_FAILED_ITEM,
  REMOVE_FAILED_ITEM
} from "../actions/itemActions";

const addUpdatingItem = (state, { payload }) => ({
  ...state,
  updating: [...state.updating, payload]
});

const removeUpdatingItem = (state, { payload }) => ({
  ...state,
  updating: [...state.updating.filter(id => id !== payload)]
});

const addFailedItem = (state, { payload }) => ({
  ...state,
  failed: [...state.failed, payload]
});

const removeFailedItem = (state, { payload }) => ({
  ...state,
  failed: [...state.failed.filter(id => id !== payload)]
});

const defaultState = {
  updating: [],
  failed: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_UPDATING_ITEM:
      return addUpdatingItem(state, action);
    case REMOVE_UPDATING_ITEM:
      return removeUpdatingItem(state, action);
    case ADD_FAILED_ITEM:
      return addFailedItem(state, action);
    case REMOVE_FAILED_ITEM:
      return removeFailedItem(state, action);
  }
  return state;
};
