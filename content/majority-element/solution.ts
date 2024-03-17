export function majorityElement(nums: number[]): number {
  let currentMajority = nums[0];
  let amount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === currentMajority) amount++;
    else if (amount === 0) currentMajority = nums[i];
    else amount--;
  }

  return currentMajority;
};

/**
 *     [2,2,1,1,1,2,2] cm=2 a=1
 * 1 - [2,2,1,1,1,2,2] cm=2 a=2
 * 2 - [2,2,1,1,1,2,2] cm=2 a=1
 * 3 - [2,2,1,1,1,2,2] cm=2 a=0
 * 4 - [2,2,1,1,1,2,2] cm=1 a=0
 * 5 - [2,2,1,1,1,2,2] cm=1 a=1
 * 6 - [2,2,1,1,1,2,2] cm=1 a=0
 * 7 - [2,2,1,1,1,2,2] cm=2 a=0
 * 
 */