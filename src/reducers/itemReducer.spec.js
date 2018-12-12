// @ts-check
import { expect } from "chai";
import * as actions from "../actions/itemActions";
import reducer from "./itemReducer";

describe("item reducer", () => {
  const defaultState = reducer(undefined, {});

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.deep.equal({
      updating: [],
      failed: []
    });
  });

  it("should handle addUpdatingItem", () => {
    const state = {
      ...defaultState,
      updating: [1]
    };
    expect(reducer(state, actions.addUpdatingItem(0))).deep.include({
      updating: [1, 0]
    });
  });

  it("should handle removeUpdatingItem", () => {
    const state = {
      ...defaultState,
      updating: [0, 1]
    };
    expect(reducer(state, actions.removeUpdatingItem(0))).deep.include({
      updating: [1]
    });
  });

  it("should handle addFailedItem", () => {
    const state = {
      ...defaultState,
      failed: [1]
    };
    expect(reducer(state, actions.addFailedItem(0))).deep.include({
      failed: [1, 0]
    });
  });

  it("should handle removeFailedItem", () => {
    const state = {
      ...defaultState,
      failed: [0, 1]
    };
    expect(reducer(state, actions.removeFailedItem(0))).deep.include({
      failed: [1]
    });
  });
});
