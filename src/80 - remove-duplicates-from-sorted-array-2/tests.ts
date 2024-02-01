import { removeDuplicates } from "./solution";

describe('80 - Remove Duplicates from Sorted Array II', () => {
  it('Case 1', () => {
    let nums = [1, 1, 1, 2, 2, 3];
    expect(removeDuplicates(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
  });

  it('Case 2', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    expect(removeDuplicates(nums)).toBe(7);
    expect(nums.slice(0, 7)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });

  it('Case 3', () => {
    const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(removeDuplicates(nums)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([1, 1]);
  });
});