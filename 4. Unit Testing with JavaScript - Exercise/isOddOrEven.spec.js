import { isOddOrEven } from "./isOddOrEven.js"
import { expect } from "chai"

describe("isOddOrEven", () => {
    it("Should return undefined when non-string value is passed.", () => {
        // Arrange
        const inputValue = 15;
        const inputValue1 = undefined;
        const inputValue2 = null;
        const inputValue3 = 15.5;
        // Act
        const resultNumber = isOddOrEven(inputValue);
        const resultNumber1 = isOddOrEven(inputValue1);
        const resultNumber2 = isOddOrEven(inputValue2);
        const resultNumber3 = isOddOrEven(inputValue3);
        // Assert
        expect(resultNumber).to.be.undefined;
        // expect(resultNumber).to.be.equal(undefined); // same as above
        expect(resultNumber1).to.be.undefined;
        expect(resultNumber2).to.be.undefined;
        expect(resultNumber3).to.be.undefined;
    })
    it("It should return even if even length string is given.", () => {
        // Arrange
        const inputValue = "text";
        // Act
        const result = isOddOrEven(inputValue);
        // Assert
        expect(result).to.be.equal('even')
    })
    it("It should return odd if odd length string is given.", () => {
        // Arrange
        const inputValue = "texts";
        // Act
        const result = isOddOrEven(inputValue);
        // Assert
        expect(result).to.be.equal('odd')
    })
    it("It should return ... when input string is zero.", () => {
        // Arrange
        const inputValue = "";
        // Act
        const result = isOddOrEven(inputValue);
        // Assert
        expect(result).to.be.equal('even')
    })
})