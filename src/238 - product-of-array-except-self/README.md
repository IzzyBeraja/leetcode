# [238] - Product of Array Except Self

Given an integer array `nums`, return an array `answer` such that `answer[i]` is
equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
integer.

You must write an algorithm that runs in `O(n)` time and without using the
division operation.

Example 1:

> Input: nums = [1,2,3,4]\
> Output: [24,12,8,6]

Example 2:

> Input: nums = [-1,1,0,-3,3]\
> Output: [0,0,9,0,0]

Constraints:

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
  integer

## Solution

> Time Complexity: O(n)\
> Space Complexity: O(n)

Problem 238 asks us to find the product of all the elements of `nums` except
`nums[i]`. We can solve this problem by keeping track of the product of all
elements before and after the current element and store the result in its own
array.

We want to ensure that the product at each index `i` is the product of all
numbers except for itself. We can do this by keeping track of the rolling
products of numbers to the left and right of each index. We can actually do both
sides of the array simultaneously.

Let's consider the example `[1,2,3,4,5,6]`. At the first index, there are no
numbers to the left of `i`, so the product before `i` is 1. There are no
elements to the right of `nums.length - i - 1`, so the product is 1.

For every index `i`, we can calculate the product of all numbers to the left of
`i` by multiplying the last value at that index and doing she same for all the
values to the right of `nums.length - i - 1`. By the time we reach the end of
the array, we will have accumulated all the products of the numbers to the right
of the first index and the products of the numbers to the left of the last
index. The result array will contain the product of all the numbers except for
itself.

In this particular problem, the prompt states that the resulting array does not
count as extra space for the purposes of space complexity. It doesn't make sense
since the resulting array does take up O(n) space. I tried to figure out a way
to truly make this O(1) space, but I couldn't find a way to do it.

[238]: https://leetcode.com/problems/product-of-array-except-self
