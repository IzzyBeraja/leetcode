import { productExceptSelf } from "./solution";

describe("238 - Product of Array Except Self", () => {
  it("Case 1", () => {
    const nums = [1, 2, 3, 4];
    expect(productExceptSelf(nums)).toEqual([24, 12, 8, 6]);
  });

  it("Case 2", () => {
    const nums = [5, 1, 0, 7, 3];
    expect(productExceptSelf(nums)).toEqual([0, 0, 105, 0, 0]);
  });
});
