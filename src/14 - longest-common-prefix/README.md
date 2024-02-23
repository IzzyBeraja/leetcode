# [14] - Longest Common Prefix

> Difficulty: Easy\
> Personal Difficulty: ⭐⭐

## Prompt

Write a function to find the longest common prefix string amongst an array of
strings.

If there is no common prefix, return an empty string `""`.

Example 1:

> Input: strs = ["flower","flow","flight"]\
> Output: "fl"

Example 2:

> Input: strs = ["dog","racecar","car"]\
> Output: ""

Constraints:

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.

## Solution

> Time Complexity O(n \* m) n = array length, m = sum of string length\
> Space Complexity O(1)

This problem involves finding the longest common prefix of a list of strings.
I'm using an approach that I now know is called "horizontal scanning". The idea
is that we pick the first string as the prefix and compare each of the
characters of that prefix with each of the strings in the array. To speed up the
process, we can stop checking letters as soon as we find a mismatch and update
the prefix to the substring up to that point.

[14]: https://leetcode.com/problems/longest-common-prefix
