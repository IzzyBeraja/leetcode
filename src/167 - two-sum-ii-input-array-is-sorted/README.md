# [167] - Two Sum II - Input array is sorted

> Difficulty: Medium\
> Personal Difficulty: ⭐️⭐️

## Prompt

Given a 1-indexed array of integers `numbers` that is already sorted in
non-decreasing order, find two numbers such that they add up to a specific
`target` number. Let these two numbers be `numbers[index1]` and
`numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an
integer array `[index1, index2]` of length `2`.

The tests are generated such that there is exactly one solution. You may not use
the same element twice.

Your solution must use only constant extra space.

Example 1:

> Input: numbers = [2,7,11,15], target = 9\
> Output: [1,2]

Example 2:

> Input: numbers = [2,3,4], target = 6\
> Output: [1,3]

Example 3:

> Input: numbers = [-1,0], target = -1\
> Output: [1,2]

Constraints:

- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in non-decreasing order.
- `-1000 <= target <= 1000`
- The tests are generated such that there is exactly one solution.

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(1)`

In this problem, we are trying to find two numbers that add up to a target
value. Since we are guaranteed that there is exactly one solution and that the
array is sorted, we can use a two-pointer approach to solve this problem. We
have two pointers, a left and a right pointer. If the sum of the numbers at each
pointer is less than the target, that means we need to increase overall value,
so we move the left pointer to the right. If the sum is greater than the target,
we need to decrease the overall value, so we move the right pointer to the left.
We continue this process until we find the two numbers that add up to the
target. We also have to remember that the array is 1-indexed, so we need to add
1 to the indices of the two numbers we find.

If in this problem there was not a guarantee that there was a solution, we would
want to return early if we find the target and if we don't in the end, return
`[-1, -1]`. This would behave similarly to functions like `indexOf`.

[167]: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
