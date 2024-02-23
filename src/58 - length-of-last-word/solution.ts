export function lengthOfLastWord(s: string): number {
  return s.trim().split(" ").splice(-1)[0].length;
}
