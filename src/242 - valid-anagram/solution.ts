export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const letters = new Map<string, number>();

  for (let i = 0; i < s.length; i++)
    letters.set(s[i], (letters.get(s[i]) || 0) + 1);

  for (let i = 0; i < t.length; i++) {
    if (!letters.has(t[i]) || letters.get(t[i])! <= 0) return false;

    letters.set(t[i], letters.get(t[i])! - 1);
  }

  return true;
}
