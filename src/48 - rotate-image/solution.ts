export function rotate(matrix: number[][]): void {
  if (matrix.length < 2) return;

  let depth = 0;
  let maxDepth = Math.floor(matrix.length / 2);
  let i = depth;

  while (depth < maxDepth) {
    [
      matrix[depth][i],
      matrix[i][matrix.length - depth - 1],
      matrix[matrix.length - depth - 1][matrix.length - i - 1],
      matrix[matrix.length - i - 1][depth],
    ] = [
      matrix[matrix.length - i - 1][depth],
      matrix[depth][i],
      matrix[i][matrix.length - depth - 1],
      matrix[matrix.length - depth - 1][matrix.length - i - 1],
    ];

    i++;

    if (i >= matrix.length - depth - 1) {
      depth++;
      i = depth;
    }
  }
}
