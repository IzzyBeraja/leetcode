export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) break;

    if (sum > target) right--;
    else left++;
  }

  return [left + 1, right + 1];
}

/**
 * numbers = [2,7,11,15], target = 9
 * l=0, r=3 => 2 + 15 = 17 > 9 :: r--
 * l=0, r=2 => 2 + 11 = 13 > 9 :: r--
 * l=0, r=1 => 2 + 7 = 9 == 9 :: [l+1, r+1] => [1,2]
 */
