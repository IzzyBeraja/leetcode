# [290] - Word Pattern [00:19:24]

> Difficulty: Easy\
> Personal Difficulty: ⭐️⭐️

## Prompt

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter
in `pattern` and a non-empty word in `s`.

Example 1:

> Input: pattern = "abba", s = "dog cat cat dog"\
> Output: true

Example 2:

> Input: pattern = "abba", s = "dog cat cat fish"\
> Output: false

Example 3:

> Input: pattern = "aaaa", s = "dog cat cat dog"\
> Output: false

Constraints:

- `1 <= pattern.length <= 300`
- `pattern` contains only lower-case English letters.
- `1 <= s.length <= 3000`
- `s` contains only lowercase English letters and spaces `' '`.
- `s` does not contain any leading or trailing spaces.
- All the words in `s` are separated by a single space.

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

In this problem, we want to match a pattern to a string. Each letter in the
pattern represents a word in the string that it maps to. To solve this, we need
to keep track of the mapping from the pattern letter to the word in the string
and vice versa. The reason we need the reverse as well is because we don't want
a word in the string to map to two different letters in the pattern.

We use two hash maps to keep track of mappings and iterate through the pattern
until we find a mismatch or we iterate through the entire pattern. If we iterate
through the entire pattern, we return `true`. If we find a mismatch, we return
`false`.

There are two things to keep in mind here:

- The pattern length and the amount of words are not guaranteed to be the same
- There is a test case meant to trip up people that are using bare objects
  instead of Map

For the first, the simple thing to do is return `false` if the pattern length
and the amount of words are not the same.

For the second, there is a test case where one of the words it "constructor".
Although this may seem like a benign test case, it will cause issues if one of
the words is "constructor" when using a standard object as "constructor" is a
property of all objects and will not be overwritten. This will cause test cases
to fail since the value at "constructor" will be a function instead of the
expected value. By using Map, we avoid this issue.

[290]: https://leetcode.com/problems/word-pattern/
