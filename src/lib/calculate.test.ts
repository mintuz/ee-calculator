import { add, subtract, multiply, divide } from "./calculate";

describe("Calculate lib", () => {
  test("Should add value to previous value", () => {
    expect(add(10, 10)).toEqual(20);
  });

  test("Should subtract value from previous value", () => {
    expect(subtract(10, 10)).toEqual(0);
  });

  test("Should multiply value", () => {
    expect(multiply(10, 10)).toEqual(100);
  });
});
