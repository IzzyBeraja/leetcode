import { hIndex } from "./solution";

describe("274 - H-Index", () => {
  it("Case 1", () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  });

  it("Case 2", () => {
    expect(hIndex([1, 3, 1])).toBe(1);
  });

  it("Case 3", () => {
    expect(hIndex([100])).toBe(1);
  });

  it("Case 4", () => {
    expect(hIndex([0, 0, 0, 0, 1, 2, 2])).toBe(2);
  });

  it("Case 5", () => {
    expect(hIndex([0])).toBe(0);
  });
});
