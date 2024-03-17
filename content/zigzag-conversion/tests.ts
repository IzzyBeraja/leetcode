import { convert } from "./solution";

describe("6 - ZigZag Conversion", () => {
  test("Case 1", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });

  test("Case 2", () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });

  test("Case 3", () => {
    expect(convert("A", 1)).toBe("A");
  });
});
