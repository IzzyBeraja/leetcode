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

  it("Case 4", () => {
    expect(majorityElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1])).toBe(1);
  });

  it("Case 5", () => {
    expect(majorityElement([3, 2, 3, 2, 2, 3, 4, 2, 2])).toBe(2);
  });
});