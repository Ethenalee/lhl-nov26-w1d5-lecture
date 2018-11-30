var expect = require("chai").expect;
var santa = require("../index");
var solutionInput = require("./input");

describe("Santa's Appartment", function() {
  describe("parsing", function() {
    it("converts the input into a list of directions", function() {
      // Arrange
      var input = "(())";

      // Act
      var result = santa.parse(input);

      // Assert
      expect(result).to.deep.equal(["UP", "UP", "DOWN", "DOWN"]);
    });

    it("converts a different input into a list of directions", function() {
      // Arrange
      var input = "(((";

      // Act
      var result = santa.parse(input);

      // Assert
      expect(result).to.deep.equal(["UP", "UP", "UP"]);
    });
  });

  describe("Moving between floors", function() {
    it("moves to the 0th floor for the first input", function() {
      // Arrange
      var input = "(())";

      // Act
      var result = santa.move(input);

      // Assert
      expect(result).to.equal(0);
    });

    it("moves to the third floor for the second test input", function() {
      // Arrange
      var input = "(((";

      // Act
      var result = santa.move(input);

      // Assert
      expect(result).to.equal(3);
    });
  });

  describe("Solution", function() {
    it("should move to the 138th floor for the puzzle input", function() {
      expect(santa.move(solutionInput)).to.eq(138);
    });
  });
});
