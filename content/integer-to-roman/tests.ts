import { intToRoman } from "./solution";

describe("12 - Integer to Roman", () => {
  it("Case 1", () => {
    expect(intToRoman(3)).toBe("III");
  });

  it("Case 2", () => {
    expect(intToRoman(4)).toBe("IV");
  });

  it("Case 3", () => {
    expect(intToRoman(9)).toBe("IX");
  });

  it("Case 4", () => {
    expect(intToRoman(58)).toBe("LVIII");
  });

  it("Case 5", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
  });
});
