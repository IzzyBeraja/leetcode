export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const elements = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (elements.has(nums[i]) && i - elements.get(nums[i])! <= k) return true;

    elements.set(nums[i], i);
  }

  return false;
}
