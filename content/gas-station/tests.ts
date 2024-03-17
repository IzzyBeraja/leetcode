import { canCompleteCircuit } from "./solution";

describe("134 - Gas Station", () => {
  it("Case 1", () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
  });

  it("Case 2", () => {
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
  });

  it("Case 3", () => {
    expect(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])).toBe(4);
  });

  it("Case 4", () => {
    expect(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])).toBe(3);
  });
});
