export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let amount = 2;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[amount - 2]) {
      nums[amount] = nums[i];
      amount++;
    }
  }

  return amount;
};

/**
 *     [1,1,1,2,2,3] a=0
 * 1 - [1,1,1,2,2,3] a=1 -> [1,1,1,2,2,3] a=2
 * 2 - [1,1,1,2,2,3] a=2 -> [1,1,1,2,2,3] a=2
 * 3 - [1,1,1,2,2,3] a=2 -> [1,1,2,2,2,3] a=3
 * 4 - [1,1,2,2,2,3] a=3 -> [1,1,2,2,2,3] a=4
 * 5 - [1,1,2,2,2,3] a=4 -> [1,1,2,2,3,3] a=5
 *
*/