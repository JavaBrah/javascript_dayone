
const romanNumerals = require("./romanNumerals.js");

describe("tests", () => {

    test('Check for number 4', () => {
        expect(romanNumerals(4)).toBe('IV')
    });
    
    test('Check for number 150', () => {
        expect(romanNumerals(150)).toBe("CL")
    });
    
    test('Check for number 944', () => {
        expect(romanNumerals(944)).toBe("CMXLIV")
    })
    
    test("Check for number 542", () => {
        expect(romanNumerals(542)).toBe('DXLII')
    })
})

