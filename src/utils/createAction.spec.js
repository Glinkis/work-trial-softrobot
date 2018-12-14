// @ts-check
import { expect } from "chai";
import createAction from "./createAction";

describe("createAction()", () => {
  const action = createAction("ACTION");

  it("should create a function", () => {
    expect(action).to.be.a("function");
  });

  describe("the returned function", () => {
    it("should return an action without payload", () => {
      expect(action()).to.deep.equal({
        type: "ACTION"
      });
    });

    it("should return an action with a payload", () => {
      expect(action("payload")).to.deep.equal({
        type: "ACTION",
        payload: "payload"
      });
    });

    it("should return an action with the payload as 'undefined'", () => {
      expect(action(undefined)).to.deep.equal({
        type: "ACTION",
        payload: undefined
      });
    });
  });
});
