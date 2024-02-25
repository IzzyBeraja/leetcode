# [125] - Valid Palindrome

> Difficulty: Easy\
> Personal Difficulty: ⭐️⭐️

## Prompt

A phrase is a palindrome if, after converting all uppercase letters into
lowercase letters and removing all non-alphanumeric characters, it reads the
same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

Example 1:

> Input: s = "A man, a plan, a canal: Panama"\
> Output: true

Example 2:

> Input: s = "race a car"\
> Output: false

Example 3:

> Input: s = " "\
> Output: true

Constraints:

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

In this problem, we are tasked with checking if a string is a palindrome. The
catch here is that there are characters that need to be filtered out before we
can properly check. To remove these characters, we use the string method
`replace` with a regular expression that matches any non-alphanumeric characters
and replace them with an empty string. From there, we make the entire string
lowercase to make comparison easier. We could have also opted to use
localeCompare to compare the strings in a case-insensitive manner, but this
works just as well. From there we check if the index of the first character is
equal to the index of the last character, and if it is, we advance the left
index by one and decrement the right index by one. This is done until either
there is a mismatch or we reach the end of the string. We could make this
function slightly faster by stopping at the middle of the string.

Because we have to loop over the entire string, the time complexity is `O(n)`,
and the space complexity is also `O(n)` because we create a new string. If we
wanted to solve this in `O(1)` space, we would skip the string modification
steps and keep track of two separate pointers advancing them when they find a
non-alphanumeric character. I found that doing this in JS took a bit longer when
running which is why I opted for the string modification approach.

[125]: https://leetcode.com/problems/valid-palindrome/
