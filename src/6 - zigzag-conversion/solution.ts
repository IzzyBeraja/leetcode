export function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const stringSegments = Array(numRows).fill("");

  let direction = 1;
  let row = 0;

  for (let i = 0; i < s.length; i++) {
    stringSegments[row] += s[i];
    row += direction;

    if (row === numRows - 1) direction = -1;
    else if (row === 0) direction = 1;
  }

  return stringSegments.join("");
}
