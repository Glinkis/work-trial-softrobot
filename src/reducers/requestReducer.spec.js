// @ts-check
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
    const state = {
      ...defaultState,
      errors: []
    };
    expect(reducer(state, requestError("error"))).deep.equals({
      ...defaultState,
      errors: ["error"]
    });
  });

  it("should handle requestItems", () => {
    const state = {
      ...defaultState,
      openRequests: 0
    };
    expect(reducer(state, requestItems())).deep.equals({
      ...defaultState,
      errors: [],
      openRequests: 1
    });
  });

  it("should handle requestUsers", () => {
    const state = {
      ...defaultState,
      openRequests: 0
    };
    expect(reducer(state, requestUsers())).deep.equals({
      ...defaultState,
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
    expect(reducer(state, receiveItems([{}]))).deep.equals({
      ...defaultState,
      openRequests: 1,
      items: [{}]
    });
  });

  it("should handle receiveUsers", () => {
    const state = {
      ...defaultState,
      openRequests: 2,
      users: []
    };
    expect(reducer(state, receiveUsers([{}]))).deep.equals({
      ...defaultState,
      openRequests: 1,
      users: [{}]
    });
  });

  it("should handle requestRejected", () => {
    const state = {
      ...defaultState,
      openRequests: 2
    };
    expect(reducer(state, requestRejected())).deep.equals({
      ...defaultState,
      openRequests: 1
    });
  });
});
