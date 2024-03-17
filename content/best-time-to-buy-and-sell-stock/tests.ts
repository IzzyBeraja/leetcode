import { maxProfit } from './solution';

describe('121 - Best Time to Buy and Sell Stock', () => {
  it("Case 1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("Case 2", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("Case 3", () => {
    expect(maxProfit([1, 2])).toBe(1);
  });
});