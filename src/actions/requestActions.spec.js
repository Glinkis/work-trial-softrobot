// @ts-check
import { expect } from "chai";
import * as actions from "./requestActions";

describe("request actions", () => {
  it("should create an action to add a request error", () => {
    expect(actions.requestError("error")).deep.equals({
      type: actions.REQUEST_ERROR,
      payload: "error"
    });
  });

  it("should create an action to request items", () => {
    expect(actions.requestItems()).deep.equals({
      type: actions.REQUEST_ITEMS,
      payload: undefined
    });
  });

  it("should create an action to recieve items", () => {
    const item = { id: 0, text: "", date: "", userId: 0, active: false };
    expect(actions.receiveItems([item])).deep.equals({
      type: actions.RECEIVE_ITEMS,
      payload: [item]
    });
  });

  it("should create an action to request users", () => {
    expect(actions.requestUsers()).deep.equals({
      type: actions.REQUEST_USERS,
      payload: undefined
    });
  });

  it("should create an action to recieve users", () => {
    expect(actions.receiveUsers(["Bob", "Fred"])).deep.equals({
      type: actions.RECEIVE_USERS,
      payload: ["Bob", "Fred"]
    });
  });

  it("should create an action to reject a request", () => {
    expect(actions.requestRejected()).deep.equals({
      type: actions.REQUEST_REJECTED,
      payload: undefined
    });
  });
});
