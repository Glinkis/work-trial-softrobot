// @ts-check
import { expect } from "chai";
import createAction from "./createAction";

describe("createAction()", () => {
  it("should create a function", () => {
    expect(createAction("ACTION")).to.be.a("function");
  });

  describe("calling the returned function without payload", () => {
    it("should return an action without payload", () => {
      expect(createAction("ACTION")()).to.deep.equal({
        type: "ACTION"
      });
    });
  });

  describe("calling the returned function with a payload", () => {
    it("should return an action with a payload", () => {
      expect(createAction("ACTION")("payload")).to.deep.equal({
        type: "ACTION",
        payload: "payload"
      });
    });
  });

  describe("calling the returned function with the payload as 'undefined'", () => {
    it("should return an action with the payload as 'undefined'", () => {
      expect(createAction("ACTION")(undefined)).to.deep.equal({
        type: "ACTION",
        payload: undefined
      });
    });
  });
});
