export function maxProfit(prices: number[]): number {
  let lowest = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) lowest = prices[i];
    if (prices[i] - lowest > maxProfit) maxProfit = prices[i] - lowest;
  }

  return maxProfit;
};

/**
 * Example 1
 *     [7,1,5,3,6,4]
 * 0 - [7,1,5,3,6,4] l=7, mp=0
 * 1 - [7,1,5,3,6,4] l=1, mp=4
 * 2 - [7,1,5,3,6,4] l=1, mp=4
 * 3 - [7,1,5,3,6,4] l=1, mp=5
 * 4 - [7,1,5,3,6,4] l=1, mp=5
 * 
*/