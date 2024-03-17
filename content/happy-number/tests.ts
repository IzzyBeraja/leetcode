import { isHappy } from "./solution";

describe("202 - Happy Number", () => {
  it("Case 1", () => {
    expect(isHappy(19)).toBeTruthy();
  });

  it("Case 2", () => {
    expect(isHappy(2)).toBeFalsy();
  });
});
