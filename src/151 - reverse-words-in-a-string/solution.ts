export function reverseWords(s: string): string {
  return s.trim().split(" ").filter(Boolean).reverse().join(" ");
}
