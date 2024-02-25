# [11] - Container With Most Water

> Difficulty: Medium\
> Personal Difficulty: ⭐️⭐️

## Prompt

You are given an integer array `height` of length `n`. There are `n` vertical
lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and
`(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the
container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

> Input: height = [1,8,6,2,5,4,8,3,7]\
> Output: 49

Example 2:

> Input: height = [1,1]\
> Output: 1

Constraints:

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(1)`

This problem requires that we find the maximum area between two lines in a list.
The area is calculated by using the height of the shorter line and the distance
between the two lines. We can solve this problem by using a two-pointer
approach. The first pointer will start at the beginning of the list and the
second pointer will start at the end of the list. Each iteration, we calculate
the current area and compare it to the maximum area storing the maximum of the
two. Since the height of the water can only be as high as the shorter of the two
lines, we move the pointer of the shorter line. If they are the same, it doesn't
matter which pointer we move, so we move the first pointer forwards. We continue
until the two pointers meet and return the maximum area.

The part that can be tricky is figuring out that the index of the shorter lines
needs to advance. It may seem like we'd have to check for all combinations
otherwise, but it's not the case. If the shorter line is advanced, there is a
chance that the next line will be taller and the area could increase, but if we
move the taller line, the area will always decrease. In the case that they are
the same height, it might seem like we'd have to check both combinations, but we
can apply the same logic as we did before. When both lines are the same height,
the water level can only go down, it doesn't matter which of the two lines are
moved.

[11]: https://leetcode.com/problems/container-with-most-water/
