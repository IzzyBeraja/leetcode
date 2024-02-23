# [134] - Gas Station

> Difficulty: Medium\
> Personal Difficulty: ⭐️⭐️⭐️

## Prompt

There are `n` gas stations along a circular route, where the amount of gas at
the ith station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to
travel from the `ith` station to its next `(i + 1)th` station. You begin the
journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the starting gas station's
index if you can travel around the circuit once in the clockwise direction,
otherwise return `-1`. If there exists a solution, it is guaranteed to be unique

Example 1:

> Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\
> Output: 3

Example 2:

> Input: gas = [2,3,4], cost = [3,4,3]\
> Output: -1

Constraints:

- `n == gas.length == cost.length`
- `1 <= n <= 10^5`
- `0 <= gas[i], cost[i] <= 10^4`

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(1)`

In this problem we are given two arrays, `gas` and `cost`, and we need to find
if there is a starting point that allows us to travel around the array once.
This means that there is a point in the array where if we were to start driving,
we would make it not only to the end of the array, but also back to the starting
point from the first index.

There are a couple things to note about this problem. The first is that we are
not guaranteed to make it around the array. The second is that if there is a
solution, there is only one solution.

To check if we can make it around, we have to check if there is enough gas in
the entire array to cover the cost of the entire array. We can keep track of
this by keeping a running total of the difference between gas and cost. If that
total is negative at the end, we know that we cannot make it around the array.

Starting from the first index, our next goal is to find the first starting point
where we can successfully make it to the end of the array. We keep track of our
fuel amount given a starting index (in this case `0`). If at any point we run
out of gas, we know that all of the points before the current index would be
invalid starting points. From there, we reset our fuel amount and the new
starting point to the next index and continue.

Once we have found a starting point that allows us to make it to the end of the
array, we can be sure that it is the only solution because of the uniqueness
guarantee.

If there is a solution, and we have a negative fuel amount, that means that the
cost to the left of the current index has a greater total cost than total gas.
This means that the right side of the current index must have a greater amount
of gas than cost to make up for the negative fuel amount. We may find that even
after moving our starting index, we again find a negative fuel to cost ratio as
long as we keep pushing our starting index, we should find a portion of the
array that has a positive fuel to cost ratio. This point will be our solution.

[134]: https://leetcode.com/problems/gas-station
