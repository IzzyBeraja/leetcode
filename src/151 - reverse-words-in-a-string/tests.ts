import { reverseWords } from "./solution";

describe("151 - Reverse Words in a String", () => {
  it("Case 1", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  });

  it("Case 2", () => {
    expect(reverseWords("  hello world  ")).toBe("world hello");
  });

  it("Case 3", () => {
    expect(reverseWords("a good   example")).toBe("example good a");
  });

  it("Case 4", () => {
    expect(reverseWords("  Bob    Loves  Alice   ")).toBe("Alice Loves Bob");
  });

  it("Case 5", () => {
    expect(reverseWords("Alice does not even like bob")).toBe(
      "bob like even not does Alice"
    );
  });
});
