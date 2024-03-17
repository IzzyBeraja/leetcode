import { isPalindrome } from "./solution";

describe("125 - Valid Palindrome", () => {
  it("Case 1", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("Case 2", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
});
