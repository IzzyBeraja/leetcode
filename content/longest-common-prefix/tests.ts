import { longestCommonPrefix } from "./solution";

describe("14 - Longest Common Prefix", () => {
  it("Case 1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it("Case 2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });
});
