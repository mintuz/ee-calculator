import { add, subtract } from "./calculate";

describe("Calculate lib", () => {
  test("Should add value to previous value", () => {
    expect(add(10, 10)).toEqual(20);
  });

  test("Should subtract value from previous value", () => {
    expect(subtract(10, 10)).toEqual(0);
  });
});
