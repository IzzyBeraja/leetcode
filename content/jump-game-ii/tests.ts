import { jump } from "./solution";

describe("45 - Jump Game II", () => {
  it("Case 1", () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  });

  it("Case 2", () => {
    expect(jump([2, 0, 3, 0, 1, 4])).toBe(2);
  });

  it("Case 3", () => {
    expect(jump([1, 1, 1, 3])).toBe(3);
  });

  it("Case 4", () => {
    expect(jump([1])).toBe(0);
  });

  it("Case 5", () => {
    expect(jump([3, 3, 0, 0, 1, 1, 3])).toBe(4);
  });

  it("Case 6", () => {
    expect(jump([2, 1])).toBe(1);
  });

  it("Case 7", () => {
    expect(jump([3, 2, 1])).toBe(1);
  });
});
