# [242] - Valid Anagram [00:03:11]

> Difficulty: Easy\
> Personal Difficulty: ⭐️

## Prompt

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and
`false` otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.

Example 1:

> Input: s = "anagram", t = "nagaram"\
> Output: true

Example 2:

> Input: s = "rat", t = "car"\
> Output: false

Constraints:

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt
your solution to such a case?

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

An anagram is a word that can be formed by rearranging the letters of another.
It cannot include more letters than the original word and it cannot exclude any
letters from the original word. We can keep track of the instances of each
letter in the original work using a HashMap where the key it the letter and the
value is the number of times it appears. We can then iterate through the second
word and decrement the value of the letter in the HashMap. If we find a letter
that is not in the HashMap or if the value of the letter is less than 0, we
return `false`. If we iterate through the entire word and have not returned
`false`, we return `true`.

[242]: https://leetcode.com/problems/valid-anagram/
