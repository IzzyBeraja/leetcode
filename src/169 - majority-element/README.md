# 169 - Majority Element

## Prompt

Given an array of size n, find the majority element. The majority element is the
element that appears more than ⌊ n/2 ⌋ times. You may assume that the array is
non-empty and the majority element always exist in the array.

Example 1:

> Input: nums = [3,2,3]<br />Output: 3

Example 2:

> Input: nums = [2,2,1,1,1,2,2]<br />Output: 2

Constraints:

- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

## Solution

The constaints in this problem are very important to this solution with the most important being that the majority element always appears *more than* n/2 times. This means that there will always be more of one number than all of the others combined. One way to visualize this is as follows:

Let's say that we have an array `[3,2,3,2,2,3,4,2,2]` of length 9. This means that there are at least 5 of one number. We can visualize the amount of each number like this:

> 2,2,2,2,2<br />
> 3,3,3<br />
> 4

There are more `2`s than there are any of the other values combined. One approach that we can take is to create a map of each value and store the amount of times that each value appears:

> { 2: 5, 3: 3, 4: 1}

We can then iterate and keep track of the largest value which in this case is 2 with an amount of 5. This would make the time complexity O(n) and space complexity O(n).

But can we do better?

In this problem, we don't care how many times the number appears, we simply want the number that is the majority. This allows us to do sort of a running total and potentially only store two integers rather than another data structure.

We can do this by keeping sort of a running majority value. For the first value we find, we mark it as the majority value and give it an amount of 0. Every time that we find a value that is the majority value, we increment the amount by 1 and every time that we find a value that is not the majority value, we subtract one. If the current amount of the majority value is 0, then we change the majority value to the new value instead. This way, since the majority number appears more than half the time, we will end up with the majority value always being the value that appears more than half the time.

| Index | Current Value | Current Majority | Amount |
| - | - | - | - |
| 0 | 3 | 3 | 0 |
| 1 | 2 | 2 | 0 |
| 2 | 3 | 3 | 0 |
| 3 | 2 | 2 | 0 |
| 4 | 2 | 2 | 1 |
| 5 | 3 | 2 | 0 |
| 6 | 4 | 4 | 0 |
| 7 | 2 | 2 | 0 |
| 8 | 2 | 2 | 1 |

So therefore, 2 is the majority number and is calculated in O(1) space.
