# [3] - Longest Substring Without Repeating Characters

> Difficulty: `Medium`\
> Personal Difficulty:

## Prompt

Given a string `s`, find the length of the longest substring without repeating
characters.

Example 1:

> Input: s = "abcabcbb"\
> Output: 3

Example 2:

> Input: s = "bbbbb"\
> Output: 1

Example 3:

> Input: s = "pwwkew"\
> Output: 3

Constraints:

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces

## Solution

### Approach 1: Growing and Shrinking Window

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

In this problem, we are keeping track of the longest substring without repeating
characters. We use a sliding window to keep track of the current substring,
storing each character we have seen in a Set. Whenever we find a new character
that we haven't seen before, we expand the window. If we find a character that
we have seen before, we shrink the window from the left side, deleting them from
the Set, until we no longer have a repeating character. We keep track of the
longest substring we have seen so far and return it at the end.

### Approach 2: The Windowless Window

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

In this approach we use a Map to keep track of the last index we have seen a
character. If we find a new character, we store the current index. If we have
seen a character before, we update the start of the window to be the index after
the last time we saw the character and update the map at the current index to
reflect the new index we have seen a character. We can ignore changes to the
start of the window if the previous time we have seen a character was before the
new start point. This way, we don't have to iterate through the window to shrink
it making each addition an `O(1)` operation. This approach can be useful if we
incrementally add values over time as each addition is `O(1)` while the previous
approach can be as bad as `O(n)` since we have to iterate through the window to
shrink it.

[3]:
  https://leetcode.com/problems/longest-substring-without-repeating-characters/
