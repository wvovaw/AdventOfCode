export function partOne(text: string): number {
  const ranges = text
    .split("\n")
    .map((pair) =>
      pair.split(",").map((range) => range.split("-").map((num) => Number(num)))
    );

  let counter = 0;
  ranges.forEach((pair) => {
    const fst = pair[0];
    const snd = pair[1];
    if (fst[1] - fst[0] > snd[1] - snd[0]) {
      if (snd[0] >= fst[0] && snd[1] <= fst[1]) counter += 1;
    } else {
      if (fst[0] >= snd[0] && fst[1] <= snd[1]) counter += 1;
    }
  });
  return counter;
}

export function partTwo(text: string): number {
  const ranges = text
    .split("\n")
    .map((pair) =>
      pair.split(",").map((range) => range.split("-").map((num) => Number(num)))
    );

  let counter = 0;
  ranges.forEach((pair) => {
    const fst = pair[0];
    const snd = pair[1];
    if (fst[1] - fst[0] > snd[1] - snd[0]) {
      if (
        (fst[0] <= snd[0] && snd[0] <= fst[1]) ||
        (fst[0] <= snd[1] && snd[1] <= fst[1])
      )
        counter += 1;
    } else {
      if (
        (snd[0] <= fst[0] && fst[0] <= snd[1]) ||
        (snd[0] <= fst[1] && fst[1] <= snd[1])
      )
        counter += 1;
    }
  });
  return counter;
}
