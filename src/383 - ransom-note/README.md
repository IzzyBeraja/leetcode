# [383] - Ransom Note

> Difficulty: Easy\
> Personal Difficulty: ⭐️⭐️

## Prompt

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can
be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

Example 1:

> Input: ransomNote = "a", magazine = "b"\
> Output: false

Example 2:

> Input: ransomNote = "aa", magazine = "ab"\
> Output: false

Example 3:

> Input: ransomNote = "aa", magazine = "aab"\
> Output: true

Constraints:

- `1 <= ransomNote.length, magazine.length <= 10^5`
- `ransomNote` and `magazine` consist of lowercase English letters.

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

This problem is a counting problem where we need to keep track of the characters
that we have seen in `magazine` and check if they exist in `ransomNote`. We do
this by keeping an object containing all the letters we have found in
`magazine`. If we find the value in `magazine`, we increment the value at that
index. If we find the value in `ransomNote`, we decrement the value at that
index. If the value is less than 0, we know that we have used a letter more
times than we have seen it in `magazine`, so we return `false`. If we have
iterated through the entire `ransomNote` and have not returned `false`, we
return `true`.

[383]: https://leetcode.com/problems/ransom-note/
