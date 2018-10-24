import { expect } from "chai";
import reducer from "./itemReducer";
import {
  addUpdatingItem,
  removeUpdatingItem,
  addFailedItem,
  removeFailedItem
} from "../actions/itemActions";

describe("item reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.deep.equal({
      updating: [],
      failed: []
    });
  });

  it("should handle addUpdatingItem", () => {
    const state = {
      updating: [1],
      failed: []
    };
    expect(reducer(state, addUpdatingItem(0))).deep.equals({
      updating: [1, 0],
      failed: []
    });
  });

  it("should handle removeUpdatingItem", () => {
    const state = {
      updating: [0, 1],
      failed: []
    };
    expect(reducer(state, removeUpdatingItem(0))).deep.equals({
      updating: [1],
      failed: []
    });
  });

  it("should handle addFailedItem", () => {
    const state = {
      updating: [],
      failed: [1]
    };
    expect(reducer(state, addFailedItem(0))).deep.equals({
      updating: [],
      failed: [1, 0]
    });
  });

  it("should handle removeFailedItem", () => {
    const state = {
      updating: [],
      failed: [0, 1]
    };
    expect(reducer(state, removeFailedItem(0))).deep.equals({
      updating: [],
      failed: [1]
    });
  });
});
