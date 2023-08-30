const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("Testing calculateNumber", function () {
  describe("Floor integers", function () {
    it("return whole number 4", function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });
  describe("Rounding down", () => {
    it("return 4 as well", () => {
      assert.strictEqual(calculateNumber(3.4, 1.3), 4);
    });
  });
});
