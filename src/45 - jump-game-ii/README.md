# [45] - Jump Game II

> Difficulty: Medium\
> Personal Difficulty: ⭐⭐⭐

## Prompt

You are given a 0-indexed array of integers `nums` of length `n`. You are
initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from
index `i`. In other words, if you are at `nums[i]`, you can jump to any
`nums[i + j]` where:

- `0 <= j <= nums[i]`
- `i + j < n`

Return the minimum number of jumps to reach `nums[n - 1]`. The test cases are
generated such that you can reach `nums[n - 1]`.

Example 1:

> Input: nums = [2,3,1,1,4]\
> Output: 2

Example 2:

> Input: nums = [2,3,0,1,4]\
> Output: 2

Constraints:

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`

## Solution

> Time Complexity: O(n)\
> Space Complexity: O(1)

Originally when working on this problem, I assumed that I would need to keep
track of all the jumps that I had made and then backtrack to find the minimum
number of jumps. I figured that I should take the largest jumps at every step I
could, but didn't think much further. I created a solution where I kept track of
every choice that I had made in a stack and would push and pop values unsil I
reached then end of all my choices. That approach took `O(n^2)` time and `O(n)`
space. I didn't think there was a better solution, but I was wrong.

I looked at some of the ways that people were completing this problem online and
found some that had been able to complete it in `O(n)` time and `O(1)` space. I
was amazed and had to look into it further. It took some time to wrap my head
around how this was done so I'd like to explain it here.

Like I originally thought, we want to take the largest jumps that we possibly
can. We can't jump if the array has a size of `1` so we can return `0` when that
is the case. We then want to keep track of four different things:

- `i` - The current index we are at
- `jumps` - The number of jumps we have made
- `reachable` - The furthest index we can reach since our jump
- `nextReachable` - The next furthest index we can reach

Let's take the example of `nums = [2,3,1,1,4]` and walk through the solution.

We start by setting our jumps to `1` as we will always have to make at least one
jump. The furthest index we can reach is `2` as it is the value at `nums[0]`. We
also set `nextReachable` to `2` as well since there isn't a better option just
yet. We want to look for our next furthest reachable index so we iterate through
the nums array starting at `1`.

> i = 1, jumps = 1, reachable = 2, nextReachable = 2

At `nums[i]`, the furthest we can reach is `i + nums[i]` which is `1 + 3 = 4`.
This means that the nextReachable index or the farthest we can make it on our
next jump, will be `4`. This part confused me at first because I was trying to
keep the jumping analogy working in my head. It didn't occur to me that it
doesn't matter which position I make the jump at, it only matters how far I can
reach on my current and next jumps. A jump from `0 -> 2 -> 4` is the same as
`0 -> 1 -> 4` in terms of the distance we can reach and the total number of
jumps. This is the key to making sense of this solution.

Here is what our four variables look like:

> i = 1, jumps = 1, reachable = 2, nextReachable = 4

Another key thing happens when we have reached our `reachable` index. We want to
set our new `reachable` index to the `nextReachable` and increment our `jumps`
by `1`.

Since we can reach the end of the array at this point, we exit the loop and
return the number of jumps we have made. In this case, it would be `2`.

Although it took a while to understand what was happening, the best way to truly
get the solution is to try it out on a few examples that are more extreme, like
ones with large amounts of `0`'s in them. It becomes clearer that _where_ the
jump happens is unimportant, only the distance that we can reach on our current
and next jumps. This is a very clever solution and I'm glad I was able to learn
it.

[45]: https://leetcode.com/problems/jump-game-ii
