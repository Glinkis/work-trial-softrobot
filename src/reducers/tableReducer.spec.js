// @ts-check
import { expect } from "chai";
import * as actions from "../actions/tableActions";
import reducer from "./tableReducer";

describe("table reducer", () => {
  const defaultState = reducer(undefined, {});

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.deep.equal({
      name: "",
      direction: "",
      rows: 10,
      page: 0
    });
  });

  it("should handle sortTable", () => {
    const state1 = reducer(defaultState, actions.sortTable("DATE"));
    expect(state1).deep.include({
      name: "DATE",
      direction: "up"
    });

    const state2 = reducer(state1, actions.sortTable("DATE"));
    expect(state2).deep.include({
      name: "DATE",
      direction: "down"
    });

    const state3 = reducer(state2, actions.sortTable("DATE"));
    expect(state3).deep.include({
      name: "",
      direction: ""
    });
  });

  it("should handle setTableRow", () => {
    expect(reducer(undefined, actions.setTableRows(10))).deep.include({
      rows: 10
    });
  });

  it("should handle setTablePage", () => {
    expect(reducer(undefined, actions.setTablePage(1))).deep.include({
      page: 1
    });
  });
});
