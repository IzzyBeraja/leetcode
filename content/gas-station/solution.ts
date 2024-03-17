export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let currentFuel = 0;
  let startIndex = 0;
  let total = 0;

  gas.forEach((unit, i) => {
    total += unit - cost[i];
    currentFuel += unit - cost[i];

    if (currentFuel < 0) {
      startIndex = i + 1;
      currentFuel = 0;
    }
  });

  return total >= 0 ? startIndex : -1;
}
