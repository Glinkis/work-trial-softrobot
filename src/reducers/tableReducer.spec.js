// @ts-check
import { expect } from "chai";
import reducer from "./tableReducer";
import { sortTable, setTableRow, setTablePage } from "../actions/tableActions";

const defaultState = reducer(undefined, {});

describe("table reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.deep.equal({
      name: "",
      direction: "",
      rows: 10,
      page: 0
    });
  });

  it("should handle sortTable", () => {
    const state1 = reducer(defaultState, sortTable("DATE"));
    expect(state1).deep.include({
      name: "DATE",
      direction: "up"
    });

    const state2 = reducer(state1, sortTable("DATE"));
    expect(state2).deep.include({
      name: "DATE",
      direction: "down"
    });

    const state3 = reducer(state2, sortTable("DATE"));
    expect(state3).deep.include({
      name: "",
      direction: ""
    });
  });

  it("should handle setTableRow", () => {
    expect(reducer(undefined, setTableRow(10))).deep.include({
      rows: 10
    });
  });

  it("should handle setTablePage", () => {
    expect(reducer(undefined, setTablePage(1))).deep.include({
      page: 1
    });
  });
});
