// @ts-check
import { expect } from "chai";
import reducer from "./sortReducer";
import { sortTable } from "../actions/sortActions";

describe("sort reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.deep.equal({
      name: "",
      direction: ""
    });
  });

  it("should handle sortTable", () => {
    const state1 = {
      name: "",
      direction: ""
    };

    const state2 = reducer(state1, sortTable("Name"));
    expect(state2).deep.equals({
      name: "Name",
      direction: "up"
    });

    const state3 = reducer(state2, sortTable("Name"));
    expect(state3).deep.equals({
      name: "Name",
      direction: "down"
    });

    const state4 = reducer(state3, sortTable("Name"));
    expect(state4).deep.equals({
      name: "",
      direction: ""
    });
  });
});
