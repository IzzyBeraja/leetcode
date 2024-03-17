import { containsNearbyDuplicate } from "./solution";

describe("219 - Contains Duplicate II", () => {
  it("Case 1", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBeTruthy();
  });

  it("Case 2", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBeTruthy();
  });

  it("Case 3", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBeFalsy();
  });
});
