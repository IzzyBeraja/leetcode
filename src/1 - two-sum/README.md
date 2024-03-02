# [1] - Two Sum

> Difficulty: Easy\
> Personal Difficulty: ⭐️⭐️

## Prompt

Given an array of integers `nums` and an integer `target`, return indices of the
two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

You can return the answer in any order.

Example 1:

> Input: nums = [2,7,11,15], target = 9\
> Output: [0,1]

Example 2:

> Input: nums = [3,2,4], target = 6\
> Output: [1,2]

Example 3:

> Input: nums = [3,3], target = 6\
> Output: [0,1]

Constraints:

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time
complexity?

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

In this problem, we are looking for two numbers that together add up to the
target. A naive implementation might start at the first index and check every
other index to see if the sum is equal to the target. This would be `O(n^2)`
time complexity.

Instead, we can use a hash map to keep track of the numbers we have seen so far.
For every value in the nums array, we check if the complementary number required
to reach the target is already in the hash map. If it is, we return the indices
of the two numbers. If it is not, we add the number to the hash map and
continue.

Although in this problem we are guaranteed to have a solution, we should still
return an array with two -1s if we do not find a solution. This emulates
functions like `indexOf` in JavaScript where -1 is returned if the value is not
found.

[1]: https://leetcode.com/problems/two-sum/
