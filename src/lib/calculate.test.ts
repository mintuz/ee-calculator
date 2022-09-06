import { add } from "./calculate";

describe("Calculate lib", () => {
  test("Should add value to previous value", () => {
    expect(add(10, 10)).toEqual(20);
  });
});
