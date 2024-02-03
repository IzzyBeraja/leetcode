export function removeDuplicates(nums: number[]): number {
  let amount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[amount - 1]) {
      nums[amount] = nums[i]
      amount++;
    }
  }

  return amount;
};