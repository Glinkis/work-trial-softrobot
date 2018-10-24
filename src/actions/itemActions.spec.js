import { expect } from "chai";
import * as actions from "./itemActions";

describe("itemActions", () => {
  it("should create an action to add an updating item", () => {
    const action = actions.addUpdatingItem(0);
    const expectedAction = {
      type: actions.ADD_UPDATING_ITEM,
      payload: 0
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action to remove an updating item", () => {
    const action = actions.removeUpdatingItem(0);
    const expectedAction = {
      type: actions.REMOVE_UPDATING_ITEM,
      payload: 0
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action to add a failed item", () => {
    const action = actions.addFailedItem(0);
    const expectedAction = {
      type: actions.ADD_FAILED_ITEM,
      payload: 0
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action to remove a failed item", () => {
    const action = actions.removeFailedItem(0);
    const expectedAction = {
      type: actions.REMOVE_FAILED_ITEM,
      payload: 0
    };
    expect(action).deep.equals(expectedAction);
  });
});
