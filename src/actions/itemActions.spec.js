// @ts-check
import { expect } from "chai";
import * as actions from "./itemActions";

describe("item actions", () => {
  it("should create an action to add an updating item", () => {
    expect(actions.addUpdatingItem(0)).deep.equals({
      type: actions.ADD_UPDATING_ITEM,
      payload: 0
    });
  });

  it("should create an action to remove an updating item", () => {
    expect(actions.removeUpdatingItem(0)).deep.equals({
      type: actions.REMOVE_UPDATING_ITEM,
      payload: 0
    });
  });

  it("should create an action to add a failed item", () => {
    expect(actions.addFailedItem(0)).deep.equals({
      type: actions.ADD_FAILED_ITEM,
      payload: 0
    });
  });

  it("should create an action to remove a failed item", () => {
    expect(actions.removeFailedItem(0)).deep.equals({
      type: actions.REMOVE_FAILED_ITEM,
      payload: 0
    });
  });
});
