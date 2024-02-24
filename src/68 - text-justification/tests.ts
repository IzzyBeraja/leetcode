import { fullJustify } from "./solution";

describe("68 - Text Justification", () => {
  it("Case 1", () => {
    expect(
      fullJustify(
        ["This", "is", "an", "example", "of", "text", "justification."],
        16
      )
    ).toStrictEqual([
      "This    is    an",
      "example  of text",
      "justification.  ",
    ]);
  });

  it("Case 2", () => {
    expect(
      fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
    ).toStrictEqual([
      "What   must   be",
      "acknowledgment  ",
      "shall be        ",
    ]);
  });

  it("Case 3", () => {
    expect(fullJustify(["a", "b", "c", "d"], 9)).toStrictEqual(["a b c d  "]);
  });

  it("Case 4", () => {
    expect(
      fullJustify(
        [
          "Science",
          "is",
          "what",
          "we",
          "understand",
          "well",
          "enough",
          "to",
          "explain",
          "to",
          "a",
          "computer.",
          "Art",
          "is",
          "everything",
          "else",
          "we",
          "do",
        ],
        20
      )
    ).toStrictEqual([
      "Science  is  what we",
      "understand      well",
      "enough to explain to",
      "a  computer.  Art is",
      "everything  else  we",
      "do                  ",
    ]);
  });
});
