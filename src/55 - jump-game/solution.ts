export function canJump(nums: number[]): boolean {
  let jumpAmount = nums[0];

  for (let i = 1; i < nums.length; i++) {
    jumpAmount--;
    if (nums[i] > jumpAmount) jumpAmount = nums[i];
    if (jumpAmount === 0) return false;
  }

  return true;
};

/**
 * Example 1:
 *     [5,1,2,0,0,2]
 * 0 - [5,1,2,0,0,2] 0->5 √
 * 
 * Example: 2:
 *     [4,3,1,0,0,2]
 * 0 - [4,3,1,0,0,2] j=4 0->4,3,2->3,2,1->4,3,2,1,0
 * 
 */