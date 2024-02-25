export function isPalindrome(s: string): boolean {
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < cleanString.length; i++) {
    if (cleanString[i] !== cleanString[cleanString.length - i - 1])
      return false;
  }
  return true;
}
