// @ts-check
import { expect } from "chai";
import * as actions from "./sortActions";

describe("sort actions", () => {
  it("should create an action to sort the table", () => {
    const action = actions.sortTable("DATE");
    const expectedAction = {
      type: actions.SORT_TABLE,
      payload: "DATE"
    };
    expect(action).deep.equals(expectedAction);
  });
});
