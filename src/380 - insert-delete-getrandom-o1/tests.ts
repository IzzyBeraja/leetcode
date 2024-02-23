import { RandomizedSet } from "./solution";

describe("380 - Insert Delete GetRandom `O(1)`", () => {
  it("Case 1", () => {
    const set = new RandomizedSet();
    expect(set.insert(1)).toBe(true);
    expect(set.remove(2)).toBe(false);
    expect(set.insert(2)).toBe(true);
    expect([1, 2]).toContain(set.getRandom());
    expect(set.remove(1)).toBe(true);
    expect(set.insert(2)).toBe(false);
    expect(set.getRandom()).toBe(2);
  });

  it("Case 2", () => {
    const set = new RandomizedSet();
    expect(set.insert(0)).toBe(true);
    expect(set.insert(1)).toBe(true);
    expect(set.remove(0)).toBe(true);
    expect(set.insert(2)).toBe(true);
    expect(set.remove(1)).toBe(true);
    expect(set.getRandom()).toBe(2);
  });
});
