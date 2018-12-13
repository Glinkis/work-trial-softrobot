// @ts-check
export const SORT_TABLE = "[table] SORT_TABLE";
export const SET_TABLE_ROW = "[table] SET_TABLE_ROW";
export const SET_TABLE_PAGE = "[table] SET_TABLE_PAGE";

/** @param {string} name */
export const sortTable = name => ({
  type: SORT_TABLE,
  payload: name
});

/** @param {number} amount */
export const setTableRows = amount => ({
  type: SET_TABLE_ROW,
  payload: amount
});

/** @param {number} page */
export const setTablePage = page => ({
  type: SET_TABLE_PAGE,
  payload: page
});
