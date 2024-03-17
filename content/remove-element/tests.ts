import { removeElement } from "./solution";

describe('27 - Remove Element', () => {
  it('Case 1', () => {
    const nums = [3, 2, 2, 3];
    expect(removeElement(nums, 3)).toEqual(2);
    expect(nums).toEqual([2, 2, 3, 3]);
  });

  it('Case 2', () => {
    const nums = [1, 2, 1, 2, 1, 2, 1];
    expect(removeElement(nums, 1)).toEqual(3);
    expect(nums).toEqual([2, 2, 2, 1, 1, 1, 1]);
  });

  it('Case 3', () => {
    const nums = [1];
    expect(removeElement(nums, 1)).toEqual(0);
    expect(nums).toEqual([1]);
  });

  it('Case 4', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    expect(removeElement(nums, 2)).toEqual(5);
    expect(nums).toEqual([0, 1, 3, 0, 4, 2, 2, 2]);
    console.log(nums)
  });
});