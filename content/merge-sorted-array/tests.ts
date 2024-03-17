import { merge } from "./solution";

describe('88 - Merge Sorted Array', () => {
  it('Case 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('Case 2', () => {
    const nums1 = [1];
    merge(nums1, 1, [], 0);
    expect(nums1).toEqual([1]);
  });

  it('Case 3', () => {
    const nums1 = [0];
    merge(nums1, 0, [1], 1);
    expect(nums1).toEqual([1]);
  });

  it('Case 4', () => {
    const nums1 = [2, 0];
    merge(nums1, 1, [1], 1);
    expect(nums1).toEqual([1, 2]);
  });

  it('Case 5', () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    merge(nums1, 3, [1, 2, 3], 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Case 6', () => {
    const nums1 = [0, 0, 0, 0, 0];
    merge(nums1, 0, [1, 2, 3, 4, 5], 5);
    expect(nums1).toEqual([1, 2, 3, 4, 5]);
  });
});

