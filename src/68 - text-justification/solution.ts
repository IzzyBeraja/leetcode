export function fullJustify(words: string[], maxWidth: number): string[] {
  let result = [];
  let lineStartIndex = 0;
  let currTotalChars = 0;

  for (let i = 0; i < words.length; i++) {
    currTotalChars += words[i].length;
    const currentLength = currTotalChars + i - lineStartIndex;

    if (words.length - 1 === i) {
      result.push(
        words.slice(lineStartIndex, i + 1).join(" ") +
          " ".repeat(maxWidth - currentLength)
      );
      break;
    }

    const nextLength = currentLength + words[i + 1].length + 1;

    if (nextLength > maxWidth) {
      result.push(
        justify(words.slice(lineStartIndex, i + 1), maxWidth, currTotalChars)
      );
      currTotalChars = 0;
      lineStartIndex = i + 1;
    }
  }
  return result;
}

function justify(words: string[], width: number, charTotal: number): string {
  if (words.length === 1) return words[0] + " ".repeat(width - charTotal);

  let justifiedText = words[0];
  let remainingSpace = width - charTotal;

  for (let i = 1; i < words.length; i++) {
    const nextSpace =
      remainingSpace % (words.length - i) === 0
        ? remainingSpace / (words.length - i)
        : Math.ceil(remainingSpace / (words.length - i));

    justifiedText += " ".repeat(nextSpace) + words[i];
    remainingSpace -= nextSpace;
  }
  return justifiedText;
}

/**
 * Loop until nextTotal > maxWidth
 *    justify that text and save in array
 * if there is text left, simply append it to array using split(" ")
 */

/**
 * ["This", "is", "an", "example", "of", "text", "justification."] mw=16
 *
 * length = charTotal + arrayLength - 1
 * 0 - ["This"], length = 4, nextTotal <= 16
 * 1 - ["This", "is"] length = 7, nextTotal <= 16
 * 2 - ["This", "is", "an"] length = 10, nextTotal > 16
 *     Remaining Spaces = (maxWidth - charTotal) / (arrayLength - 1) => (16 - 8) / 2 => 4
 *     ["This    is    an"]
 * 3 - ["example"], length = 7, nextTotal <= 16
 * 4 - ["example", "of"], length = 10, nextTotal <= 16
 * 5 - ["example", "of", "text"], length = 15, nextTotal > 16
 *     Remaining Spaces = (16 - 13) / 2 => 1.5 (Take Math.ceil for first val, if next can divide evenly, spread evenly otherwise repeat)
 */
