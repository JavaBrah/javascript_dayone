const factorial = require("javascript_dayone/js_functions/factorial.js");



    test("test factorial of 0", () => {
        expect(factorial(0)).toBe(1);
    })
    test('test factorial of 1', () => {
        expect(factorial(1)).toBe(1);
    })
    test('test the factorial of 2', () => {
        expect(factorial(2)).toBe(2);
    })
    test('test the factorial of 4', () => {
        expect(factorial(4)).toBe(24);
    })
    test("test the factorial of 8", () => {
        expect(factorial(8)).toBe(40320);
    })
    test("test for the factorial of 18", () => {
        expect(factorial(18)).toBe(6402373705728000)
    })



