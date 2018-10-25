// @ts-check
export const SORT_TABLE = "SORT_TABLE";
export const SET_TABLE_ROW = "UPDATE_TABLE_ROW_AMOUNT";
export const SET_TABLE_PAGE = "SET_TABLE_PAGE";

/** @param {string} name */
export const sortTable = name => ({
  type: SORT_TABLE,
  payload: name
});

/** @param {number} amount */
export const setTableRow = amount => ({
  type: SET_TABLE_ROW,
  payload: amount
});

/** @param {number} page */
export const setTablePage = page => ({
  type: SET_TABLE_PAGE,
  payload: page
});