# [26] - Remove Duplicates from Sorted Array

> Difficulty: Easy\
> Personal Difficulty: ⭐⭐

## Prompt

Given an integer array nums sorted in non-decreasing order, remove the
duplicates in-place such that each unique element appears only once. The
relative order of the elements should be kept the same. Then return the number
of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you
need to do the following things:

- Change the array nums such that the first k elements of nums contain the
  unique elements in the order they were present in nums initially. The
  remaining elements of nums are not important as well as the size of nums
- Return k

Example 1:

> Input: nums = [1,1,2]\
> Output: 2, nums = [1,2,_]

Example 2:

> Input: nums = [0,0,1,1,1,2,2,3,3,4]\
> Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

Constraints:

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums is sorted in non-decreasing order.`

## Solution

> Time Complexity `O(n)`\
> Space Complexity `O(1)`

In this problem we are given a sorted array and are trying to remove all the
duplicates. We can use a two pointer approach to solve this problem. The first
pointer will iterate through the array and the second one will keep track of the
total amount of accepted values. Since we know that the array is sorted, we
simply have to check if the current element is greater than the element at the
second pointer. If the current value is the greater, we can store the current
value at the second pointer and increment it. Otherwise, we move on to the next
value. This does result in the last elements of the array being the same as some
of the elements in the earlier section of the array, but since we only care
about the first k elements, this is not a problem.

[26]: https://leetcode.com/problems/remove-duplicates-from-sorted-array
