# [58] - Length of Last Word

> Difficulty: Easy\
> Personal Difficulty: ⭐

## Prompt

Given a string `s` consisting of words and spaces, return the length of the last
word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

> Input: s = "Hello World"\
> Output: 5

Example 2:

> Input: s = " fly me to the moon "\
> Output: 4

Example 3:

> Input: s = "luffy is still joyboy"\
> Output: 6

Constraints:

- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in s

## Solution

This problem requires that we get the length of the last word in a string. Since
there can be leading and trailing spaces, we trim the string first. Then we want
to find the last word in the string and since every word is separated by a
space, we split the array by spaces. From there, we get the last word by either
using the length of the array or splicing the array to return the last element.
From there, we return the length of the last word.

[58]: https://leetcode.com/problems/length-of-last-word
