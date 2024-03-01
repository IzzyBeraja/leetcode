# [48] - Rotate Image [00:32:46]

> Difficulty: `Medium`\
> Personal Difficulty: ⭐️⭐️⭐️

## Prompt

You are given an `n x n` 2D matrix representing an image, rotate the image by 90
degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input
2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

> Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]\
> Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:

> Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\
> Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Constraints:

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## Solution

> Time Complexity: `O(n^2)`\
> Space Complexity: `O(1)`

This problem requires that we rotate a matrix by 90 degrees. To accomplish this,
we can do a series of swaps. In JavaScript, we can use the `destructuring`
assignment to easily swap those values.

With the way that I iterated, I kept track of a `depth` value which represented
the current layer of the matrix we were on. For example, in a 3x3 matrix, the
first layer would be the outermost layer, the second layer would be the next
inner layer, and so on. This `depth` value is used to determine the `start` and
`end` values for the current layer. The tricky part is keeping track of how to
properly swap given a somewhat static depth and dynamic `i` value.

We perform the swaps in the following order (swaps label 0-3):

```text
 0 1 2 0      0 _ _ 0      _ 1 _ _      _ _ 2 _      _ _ _ _
 2 3 3 1  =>  _ _ _ _  =>  _ _ _ 1  =>  2 _ _ _  =>  _ 3 3 _
 1 3 3 2  =>  _ _ _ _  =>  1 _ _ _  =>  _ _ _ 2  =>  _ 3 3 _
 0 2 1 0      0 _ _ 0      _ _ 1 _      _ 2 _ _      _ _ _ _
```

As the matrix grows, we still swap `4` items at a time. Here is what that looks
like (swaps labeled 0-6):

```text
 0 1 2 3 0    0 _ _ _ 0    _ 1 _ _ _    _ _ 2 _ _    _ _ _ 3 _    _ _ _ _ _
 3 4 5 4 1    _ _ _ _ _    _ _ _ _ 1    _ _ _ _ _    3 _ _ _ _    _ 4 _ 4 _
 2 5 6 5 2 => _ _ _ _ _ => _ _ _ _ _ => 2 _ _ _ 2 => _ _ _ _ _ => _ _ _ _ _  => ...
 1 4 5 4 3    _ _ _ _ _    1 _ _ _ _    _ _ _ _ _    _ _ _ _ 3    _ 4 _ 4 _
 0 3 2 1 0    0 _ _ _ 0    _ _ _ 1 _    _ _ 2 _ _    _ 3 _ _ _    _ _ _ _ _
```

We start at the corners and work our way around the matix. Once we have reached
the end, we go to the next layer and repeat.

[48]: https://leetcode.com/problems/rotate-image/
