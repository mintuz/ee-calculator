import { calculate } from "./calculate";

describe("Calculate lib", () => {
  test.each([
    ["2*2", 4],
    ["2-2", 0],
    ["2+2", 4],
    ["2/2", 1],
    ["2/0", 0],
    ["a/5", 0],
    ["2*2*2", 8],
    ["2+2+2", 6],
    ["2-2-2", -2],
    ["20/2/2", 5],
    ["0.9+0.1", 1],
    ["0.9-0.1", 0.8],
  ])("Should calculate the expression %s correctly", (expression, expected) => {
    expect(calculate(expression)).toEqual(expected);
  });
});
