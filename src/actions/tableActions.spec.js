// @ts-check
import { expect } from "chai";
import * as actions from "./tableActions";

describe("table actions", () => {
  it("should create an action to sort the table", () => {
    expect(actions.sortTable("DATE")).deep.equals({
      type: actions.SORT_TABLE,
      payload: "DATE"
    });
  });

  it("should create an action set the table rows", () => {
    expect(actions.setTableRows(10)).deep.equals({
      type: actions.SET_TABLE_ROW,
      payload: 10
    });
  });

  it("should create an action set the table page", () => {
    expect(actions.setTablePage(1)).deep.equals({
      type: actions.SET_TABLE_PAGE,
      payload: 1
    });
  });
});
