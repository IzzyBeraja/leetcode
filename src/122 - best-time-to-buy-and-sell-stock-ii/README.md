# [122] - Best Time to Buy and Sell Stock II

## Prompt

You are given an integer array prices where prices[i] is the price of a given
stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at
most one share of the stock at any time. However, you can buy it then
immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Example 1:

> Input: prices = [7,1,5,3,6,4]\
> Output: 7

Example 2:

> Input: prices = [1,2,3,4,5]\
> Output: 4

Example 3:

> Input: prices = [7,6,4,3,1]\
> Output: 0

Constraints:

- `1 <= prices.length <= 3 * 10^4`
- `0 <= prices[i] <= 10^4`

## Solution

> Time Complexity: O(n)\
> Space Complexity: O(1)

In this problem, the goal is to maximize profit by buying stocks when they are
low and selling when they are high. Because we don't care about how often we are
actually buying and selling, we simply have to check if the previous day's price
is lower than the current days price. If it is, we add the difference as profit.
If the previous price is higher, we store the current price and continue. Once
we have reached the end of the array, we have found out the maximum profit.

[122]: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
