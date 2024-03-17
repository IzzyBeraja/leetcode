import { canConstruct } from "./solution";

describe("383 - Ransom Note", () => {
  it("Case 1", () => {
    expect(canConstruct("a", "b")).toBe(false);
  });

  it("Case 2", () => {
    expect(canConstruct("aa", "ab")).toBe(false);
  });

  it("Case 3", () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });
});
