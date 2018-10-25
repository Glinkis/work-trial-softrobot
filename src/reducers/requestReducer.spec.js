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
import { UPDATE_ITEM } from "../actions/itemActions";

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
    const item = { id: 0, text: "", date: "", userId: 0, active: false };
    const reducedState = reducer(state, receiveItems([item]));

    expect(reducedState.items[0]).to.not.equal(item);

    expect(reducedState).deep.equals({
      ...defaultState,
      openRequests: 1,
      items: [{ id: 0, text: "", date: "", userId: 0, active: false }]
    });
  });

  it("should handle receiveUsers", () => {
    const state = {
      ...defaultState,
      openRequests: 2,
      users: []
    };
    expect(reducer(state, receiveUsers(["Bob"]))).deep.equals({
      ...defaultState,
      openRequests: 1,
      users: ["Bob"]
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

  it("should handle updateItem", () => {
    const state = {
      ...defaultState,
      items: [{ id: 0, active: false }, { id: 1, active: true }]
    };
    const action = {
      type: UPDATE_ITEM,
      payload: { id: 1, active: false }
    };
    const reducedState = reducer(state, action);

    expect(reducedState.items[0]).to.not.equal(state.items[0]);
    expect(reducedState.items[1]).to.not.equal(state.items[1]);

    expect(reducedState).deep.equals({
      ...defaultState,
      items: [{ id: 0, active: false }, { id: 1, active: false }]
    });
  });
});
