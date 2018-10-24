import { expect } from "chai";
import reducer from "./requestReducer";
import {
  requestError,
  requestItems,
  requestUsers,
  receiveItems,
  receiveUsers,
  requestRejected
} from "../actions/requestActions";
import { UPDATE_ITEM } from "../actions/itemActions";

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
    const state = {
      errors: []
    };
    expect(reducer(state, requestError("error"))).deep.equals({
      errors: ["error"]
    });
  });

  it("should handle requestItems", () => {
    const state = {
      openRequests: 0
    };
    expect(reducer(state, requestItems())).deep.equals({
      errors: [],
      openRequests: 1
    });
  });

  it("should handle requestUsers", () => {
    const state = {
      openRequests: 0
    };
    expect(reducer(state, requestUsers())).deep.equals({
      errors: [],
      openRequests: 1
    });
  });

  it("should handle receiveItems", () => {
    const state = {
      openRequests: 2,
      errors: ["error"],
      items: []
    };
    expect(reducer(state, receiveItems([{}]))).deep.equals({
      openRequests: 1,
      errors: ["error"],
      items: [{}]
    });
  });

  it("should handle receiveUsers", () => {
    const state = {
      openRequests: 2,
      errors: ["error"],
      users: []
    };
    expect(reducer(state, receiveUsers([{}]))).deep.equals({
      openRequests: 1,
      errors: ["error"],
      users: [{}]
    });
  });

  it("should handle requestRejected", () => {
    const state = {
      openRequests: 2
    };
    expect(reducer(state, requestRejected([{}]))).deep.equals({
      openRequests: 1
    });
  });

  it("should handle updateItem", () => {
    const state = {
      items: [{ id: 0, active: false }]
    };
    const action = {
      type: UPDATE_ITEM,
      payload: { id: 0, active: true }
    };
    expect(reducer(state, action)).deep.equals({
      items: [{ id: 0, active: true }]
    });
  });
});
