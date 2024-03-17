export function twoSum(nums: number[], target: number): number[] {
  const values = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const otherValue = target - nums[i];
    if (values.has(otherValue)) return [values.get(otherValue)!, i];
    values.set(nums[i], i);
  }

  return [-1, -1];
}
