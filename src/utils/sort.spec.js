// @ts-check
import { expect } from "chai";
import * as sort from "./sort";

describe("sort", () => {
  describe("sortByBoolean()", () => {
    it("should sort boolean values", () => {
      const unsorted = [false, true, false, true];
      const sorted = [true, true, false, false];
      expect(unsorted.sort(sort.sortByBoolean)).to.deep.equal(sorted);
    });
  });

  describe("sortByNumber()", () => {
    it("should sort numerical values", () => {
      const unsorted = [4, 1, 8, 0];
      const sorted = [8, 4, 1, 0];
      expect(unsorted.sort(sort.sortByNumber)).to.deep.equal(sorted);
    });
  });

  describe("sortByString()", () => {
    it("should short string values", () => {
      const unsorted = ["1", "b", "0", "a"];
      const sorted = ["0", "1", "a", "b"];
      expect(unsorted.sort(sort.sortByString)).to.deep.equal(sorted);
    });
  });
});
