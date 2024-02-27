import { minWindow1, minWindow2 } from "./solution";

describe("76 - Minimum Window Substring", () => {
  describe("Approach 1", () => {
    it("Case 1", () => {
      expect(minWindow1("ADOBECODEBANC", "ABC")).toBe("BANC");
    });

    it("Case 2", () => {
      expect(minWindow1("a", "a")).toBe("a");
    });

    it("Case 3", () => {
      expect(minWindow1("a", "aa")).toBe("");
    });

    it("Case 4", () => {
      expect(minWindow1("ab", "a")).toBe("a");
    });
  });

  describe("Approach 2", () => {
    it("Case 1", () => {
      expect(minWindow2("ADOBECODEBANC", "ABC")).toBe("BANC");
    });

    it("Case 2", () => {
      expect(minWindow2("a", "a")).toBe("a");
    });

    it("Case 3", () => {
      expect(minWindow2("a", "aa")).toBe("");
    });

    it("Case 4", () => {
      expect(minWindow2("ab", "a")).toBe("a");
    });
  });
});
