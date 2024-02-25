import { maxArea } from "./solution";

describe("11 - Container With Most Water", () => {
  it("Case 1", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("Case 2", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("Case 3", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });
});
