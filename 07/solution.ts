type CamelCards = { hand: string; bid: number};

function handsComparator(a: CamelCards, b: CamelCards) : 1 | 0 | -1 {
  const nominal : Record<string, number> = { A: 14, K: 13, Q: 12, J: 11, T: 10, 9: 9, 8: 8, 7: 7, 6: 6, 5: 5, 4: 4, 3: 3, 2: 2 }
  const coef : Record<string, number> = {
    "5": 7,
    "4,1": 6,
    "3,2": 5,
    "3,1,1": 4,
    "2,2,1": 3,
    "2,1,1,1": 2,
    "1,1,1,1,1": 1
  }

  const na = a.hand.split("").map(ch => nominal[ch]);
  const nb = b.hand.split("").map(ch => nominal[ch]);

  const map_a : Record<number, number> = {};
  const map_b : Record<number, number> = {};
  for (const num of na) {
    if (!map_a[num])
      map_a[num] = 1;
    else map_a[num]++;
  }
  for (const num of nb) {
    if (!map_b[num])
      map_b[num] = 1;
    else map_b[num]++;
  }

  const ka = coef[Object.values(map_a).sort((a,b) => b - a).toString()];
  const kb = coef[Object.values(map_b).sort((a,b) => b - a).toString()];
  if (ka > kb) return 1;
  else if (ka < kb) return -1;
  else if (ka == kb) {
    let i = 0;
    while (na[i] == nb[i]) ++i;

    if (na[i] > nb[i]) return 1;
    else if (na[i] < nb[i]) return -1;
  }

  return 0;
}

export function partOne(text: string): number {
  const hands : CamelCards[] = text.split("\n").map(el => el.split(" ")).map(el => ({ hand: el[0], bid: Number(el[1])}));
  const sorted_hands = hands.sort(handsComparator)

  return sorted_hands.reduce((p, c, ci) => p + (c.bid * (ci + 1)), 0);
}
export function partTwo(text: string): number {
  return 0;
}
