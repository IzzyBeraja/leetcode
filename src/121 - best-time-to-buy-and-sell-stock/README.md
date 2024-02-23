# [121] - Best Time to Buy and Sell Stock

> Difficulty: Easy\
> Personal Difficulty: ⭐️⭐️

## Prompt

You are given an array prices where prices[i] is the price of a given stock on
the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot
achieve any profit, return 0.

Example 1:

> Input: prices = [7,1,5,3,6,4]\
> Output: 5

Example 2:

> Input: prices = [7,6,4,3,1]\
> Output: 0

Constraints:

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## Solution

> Time Complexity `O(n)`\
> Space Complexity `O(1)`

This goal of this problem is to find the maximum difference between two numbers
in the array. It's important to note that the second number must come after the
first so we can't simply get the min and max of the array.

Instead, we can iterate through the array while keeping track of the smallest
number we have seen. Each iteration, we then take the diffence between the
current number and the new lowest. If this difference is greater than the
current maximum difference, we update the maximum difference.

[121]: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
