export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const results: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
      }

      if (sum < 0) left++;
      else right--;
    }
  }

  return results;
}

/**
 * Input = [-1,0,1,2,-1,-4]
 * Sorted = [-4, -1, -1, 0, 1, 2]
 *
 * i=0, l=1, r=5, sum = (-4-1+2) => -3
 * i=0, l=2, r=5, sum = (-4-1+2) => -3
 * i=0, l=3, r=5, sum = (-4+0+2) => -2
 */
