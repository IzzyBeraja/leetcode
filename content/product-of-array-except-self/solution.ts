export function productExceptSelf(nums: number[]): number[] {
  let results = Array<number>(nums.length).fill(1);

  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    results[i] *= prefix;
    results[nums.length - i - 1] *= postfix;

    prefix *= nums[i];
    postfix *= nums[nums.length - i - 1];
  }

  return results;
}
