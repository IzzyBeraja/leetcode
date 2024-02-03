export function rotate(nums: number[], k: number): void {
  const swapped = nums.splice(nums.length - (k % nums.length));
  nums.unshift(...swapped);
}