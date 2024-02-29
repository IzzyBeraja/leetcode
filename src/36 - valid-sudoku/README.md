# [36] - Valid Sudoku

> Difficulty: `Medium`\
> Personal Difficulty: ⭐️⭐️

## Prompt

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be
validated according to the following rules:

Each row must contain the digits `1-9` without repetition. Each column must
contain the digits `1-9` without repetition. Each of the nine `3 x 3` sub-boxes
of the grid must contain the digits `1-9` without repetition.

Note:

- A Sudoku board (partially filled) could be valid but is not necessarily
  solvable.
- Only the filled cells need to be validated according to the mentioned rules.

Example 1:

> Input: board =
>
> ```text
> [["5","3",".",".","7",".",".",".","."]
> ,["6",".",".","1","9","5",".",".","."]
> ,[".","9","8",".",".",".",".","6","."]
> ,["8",".",".",".","6",".",".",".","3"]
> ,["4",".",".","8",".","3",".",".","1"]
> ,["7",".",".",".","2",".",".",".","6"]
> ,[".","6",".",".",".",".","2","8","."]
> ,[".",".",".","4","1","9",".",".","5"]
> ,[".",".",".",".","8",".",".","7","9"]]
> ```
>
> Output: true

Example 2:

> Input: board =
>
> ```text
> [["8","3",".",".","7",".",".",".","."]
> ,["6",".",".","1","9","5",".",".","."]
> ,[".","9","8",".",".",".",".","6","."]
> ,["8",".",".",".","6",".",".",".","3"]
> ,["4",".",".","8",".","3",".",".","1"]
> ,["7",".",".",".","2",".",".",".","6"]
> ,[".","6",".",".",".",".","2","8","."]
> ,[".",".",".","4","1","9",".",".","5"]
> ,[".",".",".",".","8",".",".","7","9"]]
> ```
>
> Output: false

Constraints:

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `1-9` or `'.'`

## Solution

> Time Complexity: `O(n^2)`\
> Space Complexity: `O(n^2)`

Since this problem is constained to a 9x9 board, this technically has a time
complexity of `O(1)` and space complexity of `O(1)` since the board cannot be
larger than 81 cells. However, for the sake of generality, in a larger board, it
would be `O(n^2)`.

In this problem, we don't actually want to solve the sudoku, we just want to
make sure that the current board is occupied by valid numbers. This also doesn't
mean that the board is solvable, just that it is valid by the rules of sudoku.

Each row, column, and 3x3 subgrid must contain the numbers 1-9 without
repetition. We can iterate through the board keeping track of the numbers we've
seen in each row, column, and subgrid skipping empty cells. If we see a number
that we've already seen in any of these subsets, we can return false. If we make
it to the end and haven't returned false, we can return true.

[36]: https://leetcode.com/problems/valid-sudoku/
