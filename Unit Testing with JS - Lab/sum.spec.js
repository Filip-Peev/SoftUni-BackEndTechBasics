import { sum } from './sum.js'
import { expect } from 'chai'

describe('sum', () => {
    it('should return 0 if empty array is given',
    () => {
        // Arrange
        const inputArray = [];

        // Act
        const result = sum(inputArray)

        // Assert
expect(result).to.equals(0)

    })

it ('should return single element as a sum if single element array is given',
() => {
// Arrange
    const inputArray = [33];
// Act
const result = sum(inputArray);
//Assert
expect(result).to.equals(33)
})
it ('should return total sum if multi value array is given',
() => {
// Arrange
const inputArray = [33,2,5];
// Act
const result = sum(inputArray);
//Assert
expect(result).to.equals(40)
})
})