// @ts-check
import { expect } from "chai";
import * as actions from "./requestActions";

describe("requestActions", () => {
  it("should create an action to add a request error", () => {
    const action = actions.requestError("error");
    const expectedAction = {
      type: actions.REQUEST_ERROR,
      payload: "error"
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action to request items", () => {
    const action = actions.requestItems();
    const expectedAction = {
      type: actions.REQUEST_ITEMS
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action to recieve items", () => {
    const item = { id: 0 };
    const action = actions.receiveItems([item]);
    const expectedAction = {
      type: actions.RECEIVE_ITEMS,
      payload: [{ id: 0 }]
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action to request users", () => {
    const action = actions.requestUsers();
    const expectedAction = {
      type: actions.REQUEST_USERS
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action to recieve users", () => {
    const action = actions.receiveUsers(["Bob", "Fred"]);
    const expectedAction = {
      type: actions.RECEIVE_USERS,
      payload: ["Bob", "Fred"]
    };
    expect(action).deep.equals(expectedAction);
  });

  it("should create an action to reject a request", () => {
    const action = actions.requestRejected();
    const expectedAction = {
      type: actions.REQUEST_REJECTED
    };
    expect(action).deep.equals(expectedAction);
  });
});
