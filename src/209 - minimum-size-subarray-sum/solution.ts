export function minSubArrayLen(target: number, nums: number[]): number {
  const initialMinArrLength = nums.length + 1;
  let minArrLength = initialMinArrLength;

  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      minArrLength = Math.min(minArrLength, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minArrLength < initialMinArrLength ? minArrLength : 0;
}
