export function spiralOrder(matrix: number[][]): number[] {
  type Direction = "up" | "right" | "down" | "left";
  let direction: Direction = "right";
  const result = [];

  const matrixSize = matrix.length * matrix[0].length;
  let total = 0;
  let i = 0;
  let j = 0;
  let maxI = matrix.length - 1;
  let maxJ = matrix[0].length - 1;
  let minI = 1;
  let minJ = 0;

  while (total < matrixSize) {
    result.push(matrix[i][j]);

    if (direction === "down" && i === maxI) {
      direction = "left";
      maxI--;
    }
    if (direction === "right" && j === maxJ) {
      direction = "down";
      maxJ--;
    }
    if (direction === "up" && i === minI) {
      direction = "right";
      minI++;
    }
    if (direction === "left" && j === minJ) {
      direction = "up";
      minJ++;
    }

    if (direction === "right" && j < maxJ) j++;
    if (direction === "down" && i < maxI) i++;
    if (direction === "left" && j >= minJ) j--;
    if (direction === "up" && i >= minI) i--;

    total++;
  }

  return result;
}
