# [28] - Find the Index of the First Occurrence in a String

> Difficulty: Easy\
> Personal Difficulty: ⭐️

## Prompt

Given two strings `needle` and `haystack`, return the index of the first
occurrence of `needle` in `haystack`, or -1 if `needle` is not part of
`haystack`.

Example 1:

> Input: haystack = "sadbutsad", needle = "sad"\
> Output: 0

Example 2:

> Input: haystack = "leetcode", needle = "leeto"\
> Output: -1

Constraints:

- `1 <= haystack.length, needle.length <= 10^4`
- `haystack` and `needle` consist of only lowercase English characters.

## Solution

> Time Complexity: `O(n * m)`\
> Space Complexity: `O(1)`

There is a built-in function in JavaScript that does this for us, `indexOf`. It
seems like the speed of this function is `O(n * m)` where `n` is the length of
the string and `m` is the length of the search string. My guess is that it uses
some form of Raben-Karp algorithm to search for the string. If we wanted
something faster at the cost of space and/or pre-processing time, we could use
Boyer-Moore or KMP.

[28]:
  https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
