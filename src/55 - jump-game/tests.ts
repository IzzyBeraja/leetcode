import { canJump } from "./solution";

describe('55 - Jump Game', () => {
  it('Case 1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it('Case 2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  it('Case 3', () => {
    expect(canJump([0])).toBe(true);
  });

  it('Case 4', () => {
    expect(canJump([1, 2, 3])).toBe(true);
  });
});