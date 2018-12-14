// @ts-check
/// <reference path="../types.d.ts" />
import createAction from "../utils/createAction";

export const SORT_TABLE = "[table] SORT_TABLE";
export const SET_TABLE_ROW = "[table] SET_TABLE_ROW";
export const SET_TABLE_PAGE = "[table] SET_TABLE_PAGE";

/** @type {Action<string>} */
export const sortTable = createAction(SORT_TABLE);

/** @type {Action<number>} */
export const setTableRows = createAction(SET_TABLE_ROW);

/** @type {Action<number>} */
export const setTablePage = createAction(SET_TABLE_PAGE);
