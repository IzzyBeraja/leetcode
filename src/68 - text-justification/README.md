# [68] - Text Justification

> Difficulty: Hard\
> Personal Difficulty: ⭐️⭐️⭐️⭐️

## Prompt

Given an array of strings `words` and a width `maxWidth`, format the text such
that each line has exactly `maxWidth` characters and is fully (left and right)
justified.

You should pack your words in a greedy approach; that is, pack as many words as
you can in each line. Pad extra spaces `' '` when necessary so that each line
has exactly `maxWidth` characters.

Extra spaces between words should be distributed as evenly as possible. If the
number of spaces on a line does not divide evenly between words, the empty slots
on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is
inserted between words.

Note:

- A word is defined as a character sequence consisting of non-space characters
  only.
- Each word's length is guaranteed to be greater than `0` and not exceed
  `maxWidth`.
- The input array `words` contains at least one word.

Example 1:

> Input: words = ["This", "is", "an", "example", "of", "text",
> "justification."], maxWidth = 16
>
> Output:
>
> ```plaintext
> [
>   "This    is    an",
>   "example  of text",
>   "justification.  "
> ]
> ```

Example 2:

> Input: words = ["What", "must", "be", "acknowledgment", "shall", "be"],
> maxWidth = 16
>
> Output:
>
> ```plaintext
> [
>   "What   must   be",
>   "acknowledgment  ",
>   "shall be        "
> ]
> ```

Example 3:

> Input: words = ["Science", "is", "what", "we", "understand", "well", "enough",
> "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else",
> "we", "do"], maxWidth = 20
>
> Output:
>
> ```plaintext
> [
>   "Science  is  what we",
>   "understand      well",
>   "enough to explain to",
>   "a  computer.  Art is",
>   "everything  else  we",
>   "do                  "
> ]
> ```

Constraints:

- `1 <= words.length <= 300`
- `1 <= words[i].length <= 20`
- `words[i]` consists of only English letters and symbols.
- `1 <= maxWidth <= 100`
- `words[i].length <= maxWidth`

## Solution

> Time Complexity: `O(n)`\
> Space Complexity: `O(n)`

This problem involves taking a list of words and formatting them into lines that
are justified. This means that each line is exactly `maxWidth` characters long.
To accomplish this, we need to add spaces between words in a way that is as even
as possible. The last line should be left-justified, meaning that there are no
extra spaces between words.

I split this problem into two parts. The first part that I worked on was the
justify logic. I created a function that takes a list of words, a `maxWidth`,
and the total amount of characters in that list.

For example:

> The list of words: `["This", "is", "an"]`\
> `maxWidth`: `16`\
> Total amount of characters is `8`

The result should be:

> ```plaintext
> "This    is    an".
> ```

There are three words which means that there are two spaces that need to be
filled. Since the total allotted space is `16` and there are `8` characters,
this means that we can evenly distribute the spaces between the words (4 spaces
each).

But what happens if the total amount of characters is `9`? With `9` characters
with an allotted space of `16`, we would have `7` spaces to distribute into `2`
parts. If we could have partial spaces, each gap would be filled with `3.5`
spaces, but since we can't do that, we need to figure out a way to put the
additional spaces at the beginning. If the number of spaces is not divisible by
the remaining gap count, we can take the ceiling of the division which results
in one additional space in that gap. In our case, the first gap would have `4`
spaces. We then subtract `4` from the total remaining spaces to distribute, `7`,
which results in `3` spaces for the second gap. If there are remaining gaps, we
can repeat this process until there are no more spaces to distribute.

The second part of the problem is to chunk out the words that should occupy each
line and pass them to the justify function that we just created. We need to keep
track of the total amount of characters in the current line for our function to
work and the minimum space our words will occupy (assuming only one space
between each). We also want to check if the next line would exceed the
`maxWidth` if each word had one space between it and if it does, we should
justify the current line and start a new line. Once we have reached the end of
the list of words, we join the remaining words with a single space between them
add the remaining spaces to the end of the line.

I would say that although there aren't any complex algorithms involved, this
problem definitely merits a hard rating. The spacing between words can be tricky
to figure out and there is a lot of logic involved to make this run. Fun though!

[68]: https://leetcode.com/problems/text-justification
