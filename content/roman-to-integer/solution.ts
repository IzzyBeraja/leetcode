export function romanToInt(s: string): number {
  const letters: Record<string, number> = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  } as const;

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]] < letters[s[i + 1]]) {
      total -= letters[s[i]];
    } else {
      total += letters[s[i]];
    }
  }

  return total;
}
