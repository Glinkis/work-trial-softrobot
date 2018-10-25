// @ts-check
import { expect } from "chai";
import {
  addFailedItem,
  addUpdatingItem,
  removeFailedItem,
  removeUpdatingItem
} from "../actions/itemActions";
import reducer from "./itemReducer";

const defaultState = reducer(undefined, {});

describe("item reducer", () => {
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
    expect(reducer(state, addUpdatingItem(0))).deep.include({
      updating: [1, 0]
    });
  });

  it("should handle removeUpdatingItem", () => {
    const state = {
      ...defaultState,
      updating: [0, 1]
    };
    expect(reducer(state, removeUpdatingItem(0))).deep.include({
      updating: [1]
    });
  });

  it("should handle addFailedItem", () => {
    const state = {
      ...defaultState,
      failed: [1]
    };
    expect(reducer(state, addFailedItem(0))).deep.include({
      failed: [1, 0]
    });
  });

  it("should handle removeFailedItem", () => {
    const state = {
      ...defaultState,
      failed: [0, 1]
    };
    expect(reducer(state, removeFailedItem(0))).deep.include({
      failed: [1]
    });
  });
});
