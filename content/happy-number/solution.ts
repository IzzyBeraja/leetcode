export function isHappy(n: number): boolean {
  const found = new Set<number>();

  let sum = n;
  while (sum !== 1) {
    let nextSum = 0;

    while (sum > 0) {
      nextSum += (sum % 10) * (sum % 10);
      sum = Math.floor(sum / 10);
    }

    sum = nextSum;

    if (found.has(sum)) return false;
    found.add(sum);
  }

  return true;
}
