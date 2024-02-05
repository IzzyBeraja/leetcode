export function jump(nums: number[]): number {
  if (nums.length == 1) return 0;

  let jumps = 1;
  let reachable = nums[0];
  let nextReachable = nums[0];
  if (reachable >= nums.length - 1) return jumps;

  for (let i = 1; i < nums.length; i++) {
    nextReachable = Math.max(nextReachable, i + nums[i]);

    if (i === reachable) {
      reachable = nextReachable;
      jumps++;
      if (reachable >= nums.length - 1) break;
    }
  }

  return jumps;
}
