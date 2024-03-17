export function candy1(ratings: number[]): number {
  const ltr = Array(ratings.length).fill(1);
  const rtl = Array(ratings.length).fill(1);

  for (let i = 0; i < ltr.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      ltr[i] = ltr[i - 1] + 1;
    }
  }

  for (let i = rtl.length - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rtl[i] = rtl[i + 1] + 1;
    }
  }

  let total = 0;
  for (let i = 0; i < ratings.length; i++) {
    total += Math.max(ltr[i], rtl[i]);
  }

  return total;
}

export function candy2(ratings: number[]): number {
  let peak = 0;
  let up = 0;
  let down = 0;
  let total = 0;

  ratings.forEach((rating, i) => {
    if (rating > ratings[i - 1]) {
      up++;
      down = 0;
      peak = up;
      total += up;
    } else if (rating < ratings[i - 1]) {
      down++;
      up = 1;
      total += down;
      peak <= down && total++;
    } else {
      up = 1;
      down = 0;
      peak = 1;
      total++;
    }
  });

  return total;
}
