# [80] - Remove Duplicates from Sorted Array II

> Difficulty: Medium\
> Personal Difficulty: ⭐⭐

## Prompt

Given a sorted array `nums`, remove the duplicates in-place such that duplicates
appeared at most twice and return the new length.

Constraints:

- `0 <= nums.length <= 3 * 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums is sorted in non-decreasing order`

## Solution

> Time Complexity O(n)\
> Space Complexity O(1)

This is very similar to problem 26 as the name suggests but requires us to
remove duplicates that appear more than twice. At first glance, this can seem
like it would be much more complicated, but due to the array being
non-decreasing, it makes things less daunting.

Like with problem 26, we can use a two-pointer approach to solve this problem.
The first pointer is used to iterate through the array while the second is used
to keep track of how many numbers have met our criteria. We can start at the
third element since we only can fail the duplicate check if there are more than
two of the same value meaning that in arrays of length 1 or 2, we can return the
length of the array.

We start at the third element of the array and check if the values at the first
pointer (index or @) is equal to the number at two indeces before the second
pointer (amount or ^).

```text
index = 2, amount = 2
[1, 1, 1, 2, 2, 3]
 ^     @
```

We check if the value at two indeces before the second pointer is equal to the
value at the current index because this is the value that we care about. It
truly doesn't matter if the previous values have been different, it only really
matters if we have seen two of the same value back to back. If the array were
not in non-decreasing order, we would not be able to assume anything and would
have to keep track of how many instances of each value we have seen.

If the check fails, we simply move the first pointer without moving the second.
If the value is different, then that means we have not found two duplicates. We
could have found a single duplicate or a new number entirely. Either way, we can
move the second pointer and replace the value at the second pointer with the new
value.

```text
Before:
index = 3, amount = 2
[1, 1, 1, 2, 2, 3]
       ^  @

After:
index = 3, amount = 3
[1, 1, 2, 2, 2, 3]
          @
          ^
```

By doing this, we are able to keep track of how many numbers have met our
criteria and we don't need to store the data into a separate array or data
structure.

[80]: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
