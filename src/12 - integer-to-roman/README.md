# [12] - Integer to Roman

> Difficulty: Easy\
> Personal Difficulty: ⭐

## Prompt

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`,
`C`, `D` and `M`.

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example, `2` is written as II in Roman numeral, just two one's added
together. `12` is written as XII, which is simply `X + II`. The number `27` is
written as `XXVII`, which is XX + `V + II`.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not `IIII`. Instead, the number four is written
as `IV`. Because the one is before the five we subtract it making four. The same
principle applies to the number nine, which is written as `IX`. There are six
instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

Example 1:

> Input: num = 3\
> Output: "III"

Example 2:

> Input: num = 58\
> Output: "LVIII"

Example 3:

> Input: num = 1994\
> Output: "MCMXCIV"

Constraints:

- `1 <= num <= 3999`

## Solution

> Time Complexity `O(1)`\
> Space Complexity `O(1)`

Although we could create a comprehensive solution that could work for a larger
set of numerals, since the list is so small, we can actually handle all of the
cases with if-else statements. It's not the most elegant solution, but it works
well for our purposes. The solution takes `O(1)` space and the time complexity
is based on the size of the number. We could call it O(k) where k is the number
of digits in the number but will such a small amount, it's effectively `O(1)`.

[12]: https://leetcode.com/problems/integer-to-roman
