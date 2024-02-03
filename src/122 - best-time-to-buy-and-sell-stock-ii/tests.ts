import { maxProfit } from './solution';

describe('122 - Best Time to Buy and Sell Stock II', () => {
  it('Case 1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  it('Case 2', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it('Case 3', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});