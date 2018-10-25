// @ts-check
import { expect } from "chai";
import * as actions from "./tableActions";

describe("table actions", () => {
  it("should create an action to sort the table", () => {
    const action = actions.sortTable("DATE");
    const expectedAction = {
      type: actions.SORT_TABLE,
      payload: "DATE"
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action set the table rows", () => {
    const action = actions.setTableRow(10);
    const expectedAction = {
      type: actions.SET_TABLE_ROW,
      payload: 10
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action set the table page", () => {
    const action = actions.setTablePage(1);
    const expectedAction = {
      type: actions.SET_TABLE_PAGE,
      payload: 1
    };
    expect(action).deep.equals(expectedAction);
  });
});
