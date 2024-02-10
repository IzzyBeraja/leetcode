import { candy1, candy2 } from "./solution";

describe("135 - Candy", () => {
  describe("Approach 1", () => {
    it("Case 1", () => {
      expect(candy1([1, 0, 2])).toBe(5);
    });

    it("Case 2", () => {
      expect(candy1([1, 2, 2])).toBe(4);
    });

    it("Case 3", () => {
      expect(candy1([1, 2, 3, 4, 5, 6])).toBe(21);
    });

    it("Case 4", () => {
      expect(candy1([5, 0, 2, 1, 2, 4])).toBe(11);
    });
  });

  describe("Approach 2", () => {
    it("Case 1", () => {
      expect(candy2([1, 0, 2])).toBe(5);
    });

    it("Case 2", () => {
      expect(candy2([1, 2, 2])).toBe(4);
    });

    it("Case 3", () => {
      expect(candy2([1, 2, 3, 4, 5, 6])).toBe(21);
    });

    it("Case 4", () => {
      expect(candy2([5, 0, 2, 1, 2, 4])).toBe(11);
    });
  });
});

/**
 *     [5,0,2,1,2,4]
 * 0 - [2,1,1,1,1,1]
 * 1 - [2,1,1,1,1,1]
 * 2 - [2,1,2,1,1,1]
 * 3 - [2,1,2,1,1,1]
 * 4 - [2,1,2,1,2,1]
 * 5 - [2,1,2,1,2,3]
 *
 *     [1,5,5,4,3,2,1]
 * 0 - []
 */
