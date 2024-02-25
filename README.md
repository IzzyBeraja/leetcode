# LeetCode Problem Solving

I am solving LeetCode problems and documenting my submissions here. I am using
TypeScript for all of my solutions and Jest for testing. I've been doing these
for fun in my free time and to keep my problem solving skills sharp.

## README

In each problem's directory, you will find a `README.md` file that contains the
problem's description, constraints, and examples. I've included a solution
section detailing the time complexity and space complexity of my solution. I've
also included a link to the problem on LeetCode.

Some problems may include different approaches that I've noticed to solve the
problem. I don't plan on adding every approach, but I will add the ones that I
think are important to know.

At the top of each `README.md` file, you will find a difficulty rating and my
personal difficulty rating. The personal difficulty rating is based on how hard
I believe the problem is.

### Difficulty Ratings

#### Very Easy - ⭐️

The solutions to these problems are often solved with a brute force approach.
They usually rely on simple logic or a built-in function that can solve the
problem

#### Easy - ⭐️⭐️

These problems require a little more thought in how they are solved. You may
need to iterate through an array or object and perform some logic on the data
provided, but there aren't any complex algorithms or data structures required to
solve them

#### Medium - ⭐️⭐️⭐️

These problems generally have a solution that isn't clearly obvious at first
glance and cannot be solved quickly with a brute force approach. There may be a
trick to understanding and later finding the solution which make them harder
than the previous problems

#### Hard - ⭐️⭐️⭐️⭐️

These problems are more involved than the previous ones as they may require
mutliple steps, functions, or algorithms to work in tandem. In some cases,
uncommon data structures or algorithms may be required to solve the problem.
They cannot be solved with brute force and have some important edge cases to
consider

#### Very Hard - ⭐️⭐️⭐️⭐️⭐️

These problems are the most difficult and are the most involved. They have
multiple steps, many edge cases, and they may not have a clear solution at
first. There are many edge cases to consider and can be especially challenging
in languages without built-in functions or data structures

## Solutions

I've included a file in each directory called `solution.ts` that contains my
code for solving the problem. They tend not to include comments as the
`README.md` file should contain all the information you need to understand the
problem and my solution.

In some of the files there may be more than one solution which will be
documented in the `README.md` file.

## Testing

I've included a file in each directory called `test.ts` that contains all of the
test cases for each of the problems. The `describe` block contains the problem's
name and each of the `it` blocks contain the test cases for the problem. For
many of the problems, they on have the test cases from LeetCode while others
include some custom cases.

To run the tests, run the following command:

```bash
npm run test <problem-number/name>
```

This uses Jest's `--testNamePattern` flag to run the tests for the specific
problem. Ignore the last argument if you want to run all of the tests.
