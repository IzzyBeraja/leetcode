import { isAnagram } from "./solution";

describe("242 - Valid Anagram", () => {
  it("Case 1", () => {
    expect(isAnagram("anagram", "nagaram")).toBeTruthy();
  });

  it("Case 2", () => {
    expect(isAnagram("rat", "car")).toBeFalsy();
  });
});
