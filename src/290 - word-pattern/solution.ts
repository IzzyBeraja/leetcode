export function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const letterToWord = new Map<string, string>();
  const wordToLetter = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    if (!letterToWord.has(pattern[i]) && !wordToLetter.has(words[i])) {
      letterToWord.set(pattern[i], words[i]);
      wordToLetter.set(words[i], pattern[i]);
      continue;
    }

    if (
      letterToWord.get(pattern[i]) !== words[i] &&
      wordToLetter.get(words[i]) !== pattern[i]
    ) {
      return false;
    }
  }

  return true;
}
