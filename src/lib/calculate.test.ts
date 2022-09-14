import { calculate } from "./calculate";

describe("Calculate lib", () => {
  test("calculate 2*2", () => {
    expect(calculate("2*2")).toEqual(4);
  });

  test("calculate 2/2", () => {
    expect(calculate("2/2")).toEqual(1);
  });
});
