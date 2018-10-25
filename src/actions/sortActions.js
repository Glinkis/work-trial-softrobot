export const SORT_TABLE = "SORT_TABLE";

/** @param {string} name */
export const sortTable = name => ({
  type: SORT_TABLE,
  payload: name
});
