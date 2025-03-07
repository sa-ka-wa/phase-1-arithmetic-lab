require("./helpers.js");

const chai = require("chai");
const expect = chai.expect;

let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

describe("index.js", function () {
  describe("multiply", function () {
    it("is an equation whose multiplied results will equal 62", function () {
      expect(num1).to.be.a("number");
      expect(num2).to.be.a("number");
      expect(multiply).to.eq(62);
    });
  });

  let random = Math.floor(Math.random() * 100);

  describe("random", function () {
    it("generates a random integer greater than 0", function () {
      expect(Number.isInteger(random)).to.be.true;
      expect(random).to.not.eq(0);
    });
  });

  let num3 = 28;
  let num4 = 6;
  let mod = num3 % num4;

  describe("mod", function () {
    it("is an equation that calculates a remainder that is equal to 4", function () {
      expect(num3).to.be.a("number");
      expect(num4).to.be.a("number");
      expect(mod).to.eq(4);
    });
  });

  let max = Math.max(1, 2, 3, 4, 20);

  describe("max", function () {
    it("will return 20 as the highest number in the set", function () {
      expect(max).to.eq(20);
    });
  });
});
