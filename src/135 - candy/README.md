# [135] - Candy

> Difficulty: Hard\
> Personal Difficulty: ⭐️⭐️⭐️

## Prompt

There are `n` children standing in a line. Each child is assigned a rating value
given in the integer array `ratings`.

You are giving candies to these children subjected to the following
requirements:

- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies
to the children.

Example 1:

> Input: ratings = [1,0,2]\
> Output: 5

Example 2:

> Input: ratings = [1,2,2]\
> Output: 4

Constraints:

- `n == ratings.length`
- `1 <= n <= 2 * 10^4`
- `0 <= ratings[i] <= 2 * 10^4`

## Solution

### Approach 1: Left Right Left

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

Problem 135 is about sharing candy based on ratings in an array. The arrays
provided are rather small, but they can be exceedingly long so an `O(n^2)`
solution is not feasible. This means that we need to find a way to solve this
problem by iterating through the array a fixed amount of times.

Since every child must have at least one candy, we can set the initial values of
the array to `1`. From there, we need to figure out how to know how many candies
each child should have. What is clear is that if we go from left to right, as
long as the ratings go up, we will have an accurate count of candies. However,
if the ratings go down, we will need to adjust the count of candies
retroactively which can be a bit tricky. Instead, we can separately keep track
of the count of candies from right to left as well.

Now that we have a count that takes into consideration both ascending and
descending ratings, we need to figure out how to combine those results. If we
were to add both arrays together and subtract by `1`, we would have many
situations where some children get too many candies and others where children
get none. I didn't know how to approach this part of the problem, so I created
an example to help me understand the problem better.

Here is an example array:

> ratings = [1, 2, 3, 4, 0, 3, 2, 1]

In this example, the array of candies from both directions would look like this:

> left to right = [1, 2, 3, 4, 1, 2, 1, 1]\
> right to left = [1, 1, 1, 2, 1, 3, 2, 1]

From here we can see that the minimum amount of candies to satisfy the
constraint that children with a higher rating get more candies than their
neighbors can only be met by reaching the number `4` in the left to right array
and the number `3` in the right to left array. This means that at least for now,
taking the maximum value at each index of the two arrays will give us the
correct amount of candies at each index. By taking the maximum value at each
index of the two arrays, we are keeping the minimum amount of candies that
satisfies the constraints at every index.

From there, we can add the maximum values at each index to get the final result.

### Approach 2: Ups and Downs

> Time Complexity: `O(n)`\
> Space Complexity: `O(1)`

After solving the problem with the first approach, I stared to think that there
was a solution that didn't require two arrays. The values of candies at each
index was dependent on the maximum subsequence of ascending and descending
values. If the values ascended three times, their candy amounts would be
`1, 2, 3`. If the values descended four times, their candy amounts would be
`4, 3, 2, 1`. The key thing to keep track of is when the values change from
ascending to descending as the maximum value of those sequences must be used.

A way that we can account for this is by keeping track of the peak as we go up
and down. Once we reach the peak, if we go down a smaller number of times than
the peak before going up, we keep the peak value. If we go down more times than
the peak, we "increment" the peak we reached by one. I have the word "increment"
in quotes because we don't actually increase the peak, rather the value we add
to the total is to compensate for the lower peak.

Example:

> ratings = [1, 2, 3, 2, 1, 0]\
> Up=3, Down=4, Peak=3, Total=10

Although the peak is `3`, the value that should actually exist there is `4` as
the down sequence contains `4` values. We can "add" `1` to the peak (we just add
it to the total). If the down sequence contained `6` values, the real peak would
be `6`, so we would "add" `3` to the peak. Since we don't know the sequence
length as we go down, we can add `1` each time we go down beyond the peak's
value.

This means that if we keep track of the number of sequential ascending values
and descending values, we can keep track of the totals without storing them in
an array. As such, we can solve the problem in `O(1)` space.

[135]: https://leetcode.com/problems/candy
