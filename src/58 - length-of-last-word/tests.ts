import { lengthOfLastWord } from "./solution";

describe("58 - Length of Last Word", () => {
  it("Case 1", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  it("Case 2", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });

  it("Case 3", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
});
