export function lengthOfLongestSubstring1(s: string): number {
  if (s.length === 0) return 0;

  const foundValues = new Set<string>();
  let longest = 0;
  let current = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    while (foundValues.has(s[i])) {
      foundValues.delete(s[start]);
      current--;
      start++;
    }

    foundValues.add(s[i]);
    current++;
    longest = Math.max(longest, current);
  }

  return longest;
}

export function lengthOfLongestSubstring2(s: string): number {
  if (s.length === 0) return 0;

  const characters = new Map<string, number>();
  let longest = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (characters.has(s[i]) && characters.get(s[i])! > start) {
      start = characters.get(s[i])! + 1;
    }

    longest = Math.max(longest, i - start);
    characters.set(s[i], i);
  }

  return longest;
}

/**
 * dvdfsjsfd
 *
 * 0 - l=0, c=0, s=0, fv=[] => l=1, c=1, s=0, fv=[d]
 * 1 - l=1, c=1, s=0, fv=[d] => l=2, c=2, s=0, fv=[dv]
 * 2 - l=2, c=2, s=0, fv=[dv] => l=2, c=2, s=1, fv=[vd]
 * 3 - l=2, c=2, s=1, fv=[vd] => l=3, c=3, s=1, fv=[vdf]
 * 4 - l=3, c=3, s=1, fv=[vdf => l=4, c=4, s=1, fv=[vdfs]
 * 5 - l=4, c=4, s=1, fv=[vdfs] => l=5, c=5, s=1, fv=[vdfsj]
 * 6 - l=5, c=5, s=1, fv=[vdfsj] => l=5, c=2, s=5, fv=[js]
 * 7 - l=5, c=2, s=5, fv=[js] => l=5, c=3, s=5, fv=[jsf]
 * 7 - l=5, c=3, s=5, fv=[jsf] => l=5, c=4, s=5, fv=[jsfd]
 *
 */
