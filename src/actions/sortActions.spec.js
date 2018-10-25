import { expect } from "chai";
import * as actions from "./sortActions";

describe("sort actions", () => {
  it("should create an action to sort the table", () => {
    const action = actions.sortTable("Name");
    const expectedAction = {
      type: actions.SORT_TABLE,
      payload: "Name"
    };
    expect(action).deep.equals(expectedAction);
  });
});
