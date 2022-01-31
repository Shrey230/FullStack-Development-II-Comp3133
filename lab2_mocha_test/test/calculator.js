//shrey 101281313

const chai = require('chai')
const expect = chai.expect

const calculator = require('../app/calculator')

describe('Calculator', () => {
    describe('Addition', () => {
        it('10 + 10 is equals to 20', () => {
            expect(calculator.add(10 , 10)).to.equal(20)
        })
        it('expected result', () => {
            expect(calculator.add(2, 2)).to.equal(4)
            expect(calculator.add(20, 21)).to.equal(20)
            
        })
    })

    describe('Subtraction', () => {
        it('1 - 1 is equal to 0', () => {
            expect(calculator.sub(1, 1)).to.equal(0)
        })
        it('expected result', () => {
            expect(calculator.sub(6, 2)).to.equal(4)
            expect(calculator.sub(70, 20)).to.equal(10)
            expect(calculator.sub(20,5)).to.equal(16)
            
        })
    })

    describe('Multiplication', () => {
        it('1 * 1 is equal to 1', () => {
            expect(calculator.mul(1, 1)).to.equal(1)
        })
        it('expected result', () => {
            expect(calculator.mul(10, 2)).to.equal(20)
            expect(calculator.mul(20, 40)).to.equal(50)
            
        })
    })

    describe('Division', () => {
        it('1 / 1 is equal to 1', () => {
            expect(calculator.div(1, 1)).to.equal(1)
        })
        it('expected result', () => {
            expect(calculator.div(10, 2)).to.equal(5)
            expect(calculator.div(50, 6)).to.equal(10)
            
        })
        it('should return NaN if the denominator is zero', () => {
            expect(calculator.div(3, 0)).to.equal(undefined)
            expect(calculator.div(-50, 0)).to.equal(undefined)
        })
  
    })
})