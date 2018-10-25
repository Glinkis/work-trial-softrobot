import { columns } from "../components/TableHeader";

export const SORT_TABLE = "SORT_TABLE";

/** @param {keyof columns} name */
export const sortTable = name => ({
  type: SORT_TABLE,
  payload: name
});
