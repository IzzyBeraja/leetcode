# [6] - ZigZag Conversion

> Difficulty: Medium\
> Personal Difficulty: ⭐️⭐️⭐️

## Prompt

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number
of rows like this: (you may want to display this pattern in a fixed font for
better legibility)

```plaintext
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number
of rows:

> string convert(string s, int numRows);

Example 1:

> Input: s = "PAYPALISHIRING", numRows = 3\
> Output: "PAHNAPLSIIGYIR"

Example 2:

> Input: s = "PAYPALISHIRING", numRows = 4\
> Output: "PINALSIGYAHRPI"

Example 3:

> Input: s = "A", numRows = 1\
> Output: "A"

Constraints:

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

In this problem, we want to perform a zigzag pattern to arrange our text in a
funky way. To do this, we want to keep track of the characters that will be in
each row and then concatenate them together at the end. We can accomplish this
by keeping track of two things:

1. The current row we are on
2. The direction we are going in

We iterate through the string and if the direction is positive, it means we are
going down the zigzag (add `1` to the row). Once we are at the bottom row, we
reverse the direction of the zigzag and make the direction negative. If the
direction is negative, it means we are going up the zigzag (subtract `1` from
the row). By the end of the string we are iteratng through, we will have an
array of strings that represent each row which we can concatenate together to
form the final result.

In order for this method to work however, we need at least two rows. If there is
only `1` row, then the zigzag pattern is just the string itself and we can
return early, solving this issue.

[6]: https://leetcode.com/problems/zigzag-conversion
