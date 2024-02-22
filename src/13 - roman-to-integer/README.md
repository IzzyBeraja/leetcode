# [13] - Roman to Integer

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

For example, `2` is written as `II` in Roman numeral, just two ones added
together. `12` is written as `XII`, which is simply `X + II`. The number `27` is
written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not`IIII`. Instead, the number four is written
as `IV`. Because the one is before the five we subtract it making four. The same
principle applies to the number nine, which is written as `IX`. There are six
instances where subtraction is used:

`I` can be placed before `V` (5) and `X` (10) to make 4 and 9. `X` can be placed
before `L` (50) and `C` (100) to make 40 and 90. `C` can be placed before `D`
(500) and `M` (1000) to make 400 and 900. Given a roman numeral, convert it to
an integer.

Example 1:

> Input: s = "III"\
> Output: 3

Example 2:

> Input: s = "LVIII"\
> Output: 58

Example 3:

> Input: s = "MCMXCIV"\
> Output: 1994

Constraints:

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is guaranteed that `s` is a valid roman numeral in the range `[1, 3999]`.

## Solution

> Time Complexity O(n)\
> Space Complexity O(1)

When working with Roman numerals, there are some hardcoded values that we need
to consider. They are the following: `I`, `V`, `X`, `L`, `C`, `D`, and `M`. We
store these values in a dictionary so that we can access their values as we
iterate through the array. In TypeScript we need to define this as a record type
that accepts strings as keys and numbers as values, otherwise TypeScript will
infer the type as `any`. We are allowed to do this since one of the constraints
is that the input will only contain the characters
`('I', 'V', 'X', 'L', 'C', 'D', 'M')`.

We are checking whether the current value is a smaller numeral than the next
one. If this is the case, the current numeral is subtracted from the next one.
Another way to phrase this is: If the current numeral is larger than the next
numeral, add its value. If the current numeral is smaller than the next numeral,
subtract its value. We can then return the result.

[13]: https://leetcode.com/problems/roman-to-integer
