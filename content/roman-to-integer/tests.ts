import { romanToInt } from "./solution";

describe("13 - Roman to Integer", () => {
  it("Case 1", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("Case 2", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  it("Case 3", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  it("Case 4", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("Case 5", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
