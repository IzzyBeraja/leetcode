import { wordPattern } from "./solution";

describe("290 - Word Pattern", () => {
  it("Case 1", () => {
    expect(wordPattern("abba", "dog cat cat dog")).toBeTruthy();
  });

  it("Case 2", () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBeFalsy();
  });

  it("Case 3", () => {
    expect(wordPattern("aaaa", "dog cat cat dog")).toBeFalsy();
  });

  it("Case 4", () => {
    expect(wordPattern("abba", "dog constructor constructor dog")).toBeTruthy();
  });
});
