import { twoSum } from "./solution";

describe("1 - Two Sum", () => {
  it("Case 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("Case 2", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("Case 3", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
