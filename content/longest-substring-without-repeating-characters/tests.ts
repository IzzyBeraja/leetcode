import {
  lengthOfLongestSubstring1,
  lengthOfLongestSubstring2,
} from "./solution";

describe("3 - Longest Substring Without Repeating Characters", () => {
  describe("Approach 1", () => {
    it("Case 1", () => {
      expect(lengthOfLongestSubstring1("abcabcbb")).toBe(3);
    });

    it("Case 2", () => {
      expect(lengthOfLongestSubstring1("bbbbb")).toBe(1);
    });

    it("Case 3", () => {
      expect(lengthOfLongestSubstring1("pwwkew")).toBe(3);
    });

    it("Case 4", () => {
      expect(lengthOfLongestSubstring1("aab")).toBe(2);
    });
  });

  describe("Approach 2", () => {
    it("Case 1", () => {
      expect(lengthOfLongestSubstring2("abcabcbb")).toBe(3);
    });

    it("Case 2", () => {
      expect(lengthOfLongestSubstring2("bbbbb")).toBe(1);
    });

    it("Case 3", () => {
      expect(lengthOfLongestSubstring2("pwwkew")).toBe(3);
    });

    it("Case 4", () => {
      expect(lengthOfLongestSubstring2("aab")).toBe(2);
    });
  });
});
