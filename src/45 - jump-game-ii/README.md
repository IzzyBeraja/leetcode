# [45] - Jump Game II

## Prompt

You are given a 0-indexed array of integers `nums` of length `n`. You are
initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from
index `i`. In other words, if you are at `nums[i]`, you can jump to any
`nums[i + j]` where:

- `0 <= j <= nums[i]`
- `i + j < n`

Return the minimum number of jumps to reach `nums[n - 1]`. The test cases are
generated such that you can reach `nums[n - 1]`.

Example 1:

> Input: nums = [2,3,1,1,4]\
> Output: 2

Example 2:

> Input: nums = [2,3,0,1,4]\
> Output: 2

Constraints:

- `1 <= nums.length <= 10<sup>4</sup>`
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`
