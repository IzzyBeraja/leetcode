export function minWindow1(s: string, t: string): string {
  if (s.length < t.length) return "";

  const tFreq: Record<string, number> = {};
  const wFreq: Record<string, number> = {};

  for (let i = 0; i < t.length; i++) {
    tFreq[t[i]] = (tFreq[t[i]] || 0) + 1;
  }

  let left = 0;
  let minIndex = 0;
  let minWindowSize = s.length + 1;
  let wFreqCount = 0;

  for (let right = 0; right < s.length; right++) {
    if (tFreq[s[right]] == null) continue;

    wFreq[s[right]] = (wFreq[s[right]] || 0) + 1;
    wFreq[s[right]] <= tFreq[s[right]] && wFreqCount++;

    if (wFreqCount < t.length) continue;

    while (left <= right) {
      if (tFreq[s[left]] == null) {
        left++;
        continue;
      }

      if (minWindowSize > right - left + 1) {
        minWindowSize = right - left + 1;
        minIndex = left;
      }

      if (wFreq[s[left]] <= tFreq[s[left]]) {
        break;
      }

      wFreq[s[left]]--;
      left++;
    }
  }

  return minWindowSize < s.length + 1
    ? s.substring(minIndex, minIndex + minWindowSize)
    : "";
}

export function minWindow2(s: string, t: string): string {
  const tFreq: Record<string, number> = {};

  for (let i = 0; i < t.length; i++) {
    tFreq[t[i]] = (tFreq[t[i]] || 0) + 1;
  }

  let count = t.length;
  let left = 0;
  let minIndex = 0;
  let minSize = Infinity;

  for (let right = 0; right < s.length; right++) {
    if (tFreq[s[right]] != null) tFreq[s[right]]--;
    if (tFreq[s[right]] >= 0) count--;

    while (count === 0) {
      if (minSize > right - left + 1) {
        minIndex = left;
        minSize = right - left + 1;
      }

      if (tFreq[s[left]] != null) tFreq[s[left]]++;
      if (tFreq[s[left]] > 0) count++;

      left++;
    }
  }

  return minSize < Infinity ? s.substring(minIndex, minIndex + minSize) : "";
}
