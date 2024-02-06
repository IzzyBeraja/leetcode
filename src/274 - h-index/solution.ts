export function hIndex(citations: number[]): number {
  let hIndex = 0;

  citations
    .sort((a, b) => b - a)
    .forEach(citation => citation > hIndex && hIndex++);

  return hIndex;
}
