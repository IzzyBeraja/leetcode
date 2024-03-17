export function isIsomorphic(s: string, t: string): boolean {
  const sMap: Record<string, string> = {};
  const tMap: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    if (tMap[t[i]] == null && sMap[s[i]] == null) {
      tMap[t[i]] = s[i];
      sMap[s[i]] = t[i];
    }
    if (tMap[t[i]] !== s[i] || sMap[s[i]] !== t[i]) return false;
  }

  return true;
}
