export function removeElement(nums: number[], val: number): number {
  let swapIndex = 0;
  let amountRemaining = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) amountRemaining--;
    else {
      [nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]];
      swapIndex++;
    }
  }

  return amountRemaining;
};

/**
 * Case 1
 *     [3,2,2,3], val=3
 * 0 - [3,2,2,3] -> [3,2,2,3] i=0 k=3
 * 1 - [3,2,2,3] -> [2,3,2,3] i=1 k=3
 * 2 - [2,3,2,3] -> [2,2,3,3] i=2 k=3
 * 3 - [2,2,3,3] -> [2,2,3,3] i=2 k=2
 * 
 * Case 2
 *     [1,2,1,2,1,2,1], val=1
 * 0 - [1,2,1,2,1,2,1] -> [1,2,1,2,1,2,1] i=0 k=6
 * 1 - [1,2,1,2,1,2,1] -> [2,1,1,2,1,2,1] i=1 k=6
 * 2 - [2,1,1,2,1,2,1] -> [2,1,1,2,1,2,1] i=1 k=5
 * 3 - [2,1,1,2,1,2,1] -> [2,2,1,1,1,2,1] i=2 k=5
 * 4 - [2,2,1,1,1,2,1] -> [2,2,1,1,1,2,1] i=2 k=4
 * 5 - [2,2,1,1,1,2,1] -> [2,2,2,1,1,1,1] i=3 k=4
 * 6 - [2,2,2,1,1,1,1] -> [2,2,2,1,1,1,1] i=3 k=3
 * 
 */

