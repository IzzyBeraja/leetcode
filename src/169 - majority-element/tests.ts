import { majorityElement } from "./solution";

describe("169. Majority Element", () => {
  it("Case 1", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it("Case 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it("Case 3", () => {
    expect(majorityElement([1])).toBe(1);
  });
});