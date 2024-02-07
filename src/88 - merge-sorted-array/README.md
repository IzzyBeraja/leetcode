# [88] - Merge Sorted Array

> Difficulty: Easy\
> Personal Difficulty: ⭐⭐️

## Prompt

You are given two integer arrays nums1 and nums2, sorted in non-decreasing
order, and two integers m and n, representing the number of elements in nums1
and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be
stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
where the first m elements denote the elements that should be merged, and the
last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

> Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\
> Output: [1,2,2,3,5,6]

Example 2:

> Input: nums1 = [1], m = 1, nums2 = [], n = 0\
> Output: [1]

Example 3:

> Input: nums1 = [0], m = 0, nums2 = [1], n = 1\
> Output: [1]

Constraints:

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

## Solution

> Time Complexity O(n)\
> Space Complexity O(1)

In this problem, we are given an array with some trailing zeros at the end. This
allows us to add values to the end of the array without worrying about
overriding any existing values. We can use a two-pointer approach to solve this
problem. The first pointer points to the mth element of the first array and the
second pointer points to the nth element of the second array. We then compare
the mth element of nums1 and nth element of nums2. Whichever values is larger
gets added to the end of the first array and the pointer is decremented. We can
continue until we have added all of the values from the second array to the
first array. Once we have exhausted the second array, the rest of the first
array must be sorted.

[88]: https://leetcode.com/problems/merge-sorted-array
