import { isSubsequence } from "./solution";

describe("392 - Is Subsequence", () => {
  it("Case 1", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

  it("Case 2", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
  });
});
