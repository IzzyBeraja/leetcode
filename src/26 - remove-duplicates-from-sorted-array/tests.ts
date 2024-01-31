import { removeDuplicates } from "./solution";

describe("26 - Remove Duplicates from Sorted Array", () => {
  it("Case 1", () => {
    const nums = [1, 1, 2];
    expect(removeDuplicates(nums)).toEqual(2);
    expect(nums).toEqual([1, 2, 2]);
  });

  it("Case 2", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(nums)).toEqual(5);
    expect(nums).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4]);
  });

  it("Case 3", () => {
    const nums = [1, 1, 1, 1, 1, 1, 1];
    expect(removeDuplicates(nums)).toEqual(1);
    expect(nums).toEqual([1, 1, 1, 1, 1, 1, 1]);
  });
});
