import { minSubArrayLen } from "./solution";

describe("209 - Minimum Size Subarray Sum", () => {
  it("Case 1", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });

  it("Case 2", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });

  it("Case 3", () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });

  it("Case 4", () => {
    expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toBe(3);
  });

  it("Case 5", () => {
    expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toBe(5);
  });
});
