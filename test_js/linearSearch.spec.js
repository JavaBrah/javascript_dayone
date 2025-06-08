const globalLinearSearch = require("javascript_dayone/js_functions/linearSearch.js");

describe("tests globalLinearSearch", () => {
  test("globalLinearSearch('a', 'bananas'.split('')) === [1, 3, 5]", () => {
    expect(globalLinearSearch("a", "bananas".split(""))).toEqual([1, 3, 5]);
  });

  test("globalLinearSearch('s', 'bananas'.split('')) === [6]", () => {
    expect(globalLinearSearch("s", "bananas".split(""))).toEqual([6]);
  });

  test("globalLinearSearch('n', 'bananas'.split('')) === [2, 4]", () => {
    expect(globalLinearSearch("n", "bananas".split(""))).toEqual([2, 4]);
  });
});