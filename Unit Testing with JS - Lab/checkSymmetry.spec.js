import { it } from 'mocha'
import { isSymmetric } from './checkSymmetry.js'
import { expect } from 'chai'

describe('isSymmetric',
    () => {
        it('if empty array should return true', () => {
            // Arrange
            const inputArray = []
            // Act
            const result = isSymmetric(inputArray)
            // Assert
            expect(result).to.be.true
        })
        it('should return false is non-array value is given', () => {
            // Arrange
            // Act
            const nanResult = isSymmetric(NaN)
            const undefinedResult = isSymmetric(undefined)
            const objectResult = isSymmetric({})
            const nullResult = isSymmetric(null)
            const stringValues = isSymmetric('string value')
            const numberResult = isSymmetric(123)

            // Assert
            expect(nanResult).to.be.false
            expect(undefinedResult).to.be.false
            expect(objectResult).to.be.false
            expect(nullResult).to.be.false
            expect(stringValues).to.be.false
            expect(numberResult).to.be.false
        })
        it('should return false if a non-symmetric array is given', () => {
            // Arrange
            const inputArrayNonSymmetric = [1, 2, 3, 4]
            // Act
            const result = isSymmetric(inputArrayNonSymmetric)
            // Assert
            expect(result).to.be.false
        })
        it('it should return true if a symmetric array is given', () => {
            // Arrange
            const inputArrayIsSymmetric = [1,2,3,2,1]
            // Act
            const result = isSymmetric(inputArrayIsSymmetric)
            // Assert
            expect(result).to.be.true
        })
        it('it should return false if a symmetric array lookalike is given', () => {
            // Arrange
            const inputArrayIsSymmetric = [1,2,3,2,'1']
            // Act
            const result = isSymmetric(inputArrayIsSymmetric)
            // Assert
            expect(result).to.be.false
        })
    })