export function canConstruct(ransomNote: string, magazine: string): boolean {
  const letters: Record<string, number> = {};

  for (let i = 0; i < magazine.length; i++) {
    letters[magazine[i]] = (letters[magazine[i]] || 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (letters[ransomNote[i]] == null || letters[ransomNote[i]] <= 0)
      return false;
    letters[ransomNote[i]]--;
  }

  return true;
}
