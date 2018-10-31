// @ts-check
import { expect } from "chai";
import { UPDATE_ITEM } from "../actions/itemActions";
import {
  receiveItems,
  receiveUsers,
  requestError,
  requestItems,
  requestRejected,
  requestUsers
} from "../actions/requestActions";
import reducer from "./requestReducer";

const defaultState = reducer(undefined, {});

describe("request reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.deep.equal({
      openRequests: 0,
      errors: [],
      users: [],
      items: []
    });
  });

  it("should handle requestError", () => {
    expect(reducer(defaultState, requestError("error"))).deep.include({
      errors: ["error"]
    });
  });

  it("should handle requestItems", () => {
    expect(reducer(defaultState, requestItems())).deep.include({
      errors: [],
      openRequests: 1
    });
  });

  it("should handle requestUsers", () => {
    expect(reducer(defaultState, requestUsers())).deep.include({
      errors: [],
      openRequests: 1
    });
  });

  it("should handle receiveItems", () => {
    const state = {
      ...defaultState,
      openRequests: 2,
      items: []
    };
    const item = {
      id: 0,
      text: "",
      date: "",
      userId: 0,
      active: false
    };
    expect(reducer(state, receiveItems([item]))).deep.include({
      openRequests: 1,
      items: [item]
    });
  });

  it("should handle receiveUsers", () => {
    const state = {
      ...defaultState,
      openRequests: 2,
      users: []
    };
    expect(reducer(state, receiveUsers(["Bob"]))).deep.include({
      openRequests: 1,
      users: ["Bob"]
    });
  });

  it("should handle requestRejected", () => {
    const state = {
      ...defaultState,
      openRequests: 2
    };
    expect(reducer(state, requestRejected())).deep.include({
      openRequests: 1
    });
  });

  it("should handle updateItem", () => {
    const state = {
      ...defaultState,
      items: [{ id: 0, text: "", date: "", userId: 0, active: false }]
    };
    const action = {
      type: UPDATE_ITEM,
      payload: { id: 0, text: "", date: "", userId: 0, active: true }
    };
    expect(reducer(state, action)).deep.include({
      items: [{ id: 0, text: "", date: "", userId: 0, active: true }]
    });
  });
});
