import { twoSum } from "./solution";

describe("167. Two Sum II - Input array is sorted", () => {
  it("Case 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it("Case 2", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  it("Case 3", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
});
