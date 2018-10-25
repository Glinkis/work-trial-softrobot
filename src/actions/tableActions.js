// @ts-check
export const SORT_TABLE = "SORT_TABLE";
export const SET_TABLE_ROW_AMOUNT = "UPDATE_TABLE_ROW_AMOUNT";

/** @param {string} name */
export const sortTable = name => ({
  type: SORT_TABLE,
  payload: name
});

/** @param {number} amount */
export const setTableRowAmount = amount => ({
  type: SET_TABLE_ROW_AMOUNT,
  payload: amount
});
