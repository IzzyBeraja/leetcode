import { isIsomorphic } from "./solution";

describe("205 - Isomorphic Strings", () => {
  test("Case 1", () => {
    expect(isIsomorphic("egg", "add")).toBe(true);
  });

  test("Case 2", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  test("Case 3", () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });

  test("Case 4", () => {
    expect(isIsomorphic("bar", "foo")).toBe(false);
  });
});
