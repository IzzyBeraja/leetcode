import { strStr } from "./solution";

describe("28 - Find the Index of the First Occurrance in a String", () => {
  it("Case 1", () => {
    expect(strStr("hello", "ll")).toBe(2);
  });

  it("Case 2", () => {
    expect(strStr("aaaaa", "bba")).toBe(-1);
  });

  it("Case 3", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0);
  });

  it("Case 4", () => {
    expect(strStr("leetcode", "leeto")).toBe(-1);
  });
});
