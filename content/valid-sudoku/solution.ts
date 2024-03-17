export function isValidSudoku(board: string[][]): boolean {
  const rows: Record<number, Set<string>> = {};
  const columns: Record<number, Set<string>> = {};
  const boxes: Record<number, Set<string>> = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") continue;

      if (rows[i] == null) rows[i] = new Set([board[i][j]]);
      else if (rows[i].has(board[i][j])) return false;
      else rows[i].add(board[i][j]);

      if (columns[j] == null) columns[j] = new Set([board[i][j]]);
      else if (columns[j].has(board[i][j])) return false;
      else columns[j].add(board[i][j]);

      const boxCoord = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxes[boxCoord] == null) boxes[boxCoord] = new Set([board[i][j]]);
      else if (boxes[boxCoord].has(board[i][j])) return false;
      else boxes[boxCoord].add(board[i][j]);
    }
  }

  return true;
}
