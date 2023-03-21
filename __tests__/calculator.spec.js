import { sum, subtract } from '../TestProjects/Calculator/calculator.js';

describe("calculator sum", ()=>{
    test("is must sum two positive numbers",()=>{
        const result = sum(2, -2)
        expect(result).toBe(0)
    })
})

describe("calculate subtract", ()=>{
    test("is must subtract two numbers", ()=>{
        const result = subtract(2,2)
        expect(result).toBe(0)
    })
})