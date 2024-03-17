export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxVolume = 0;

  while (left != right) {
    const currentVolume =
      Math.min(height[left], height[right]) * (right - left);

    if (maxVolume < currentVolume) maxVolume = currentVolume;

    if (height[left] <= height[right]) left++;
    else right--;
  }

  return maxVolume;
}
