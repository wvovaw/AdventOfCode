type CamelCards = { hand: string; bid: number};

const handsComparatorP1 = (a: CamelCards, b: CamelCards) => {
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
  const sorted_hands = hands.sort(handsComparatorP1)

  return sorted_hands.reduce((p, c, ci) => p + (c.bid * (ci + 1)), 0);
}


function getHandStrengthP2(hand: string) {
  const conunts : Record<string, number> = {};
  let jokers = 0;
  for (const ch of hand.split("")) {
    if (ch === "J") jokers++;
    else {
      if (!conunts[ch]) conunts[ch] = 1;
      else conunts[ch] += 1;
    }
  }
  const amounts = Object.values(conunts).sort((a, b) => a - b);
  if (jokers >= 5 || amounts.at(-1)! + jokers >= 5)
    return 5;
  if (jokers >= 4 || amounts.at(-1)! + jokers >= 4)
    return 4;

  if (amounts.at(-1)! + jokers >= 3) {
    const rem_jokers = amounts.at(-1)! + jokers - 3;
    if (amounts.length >= 2 && amounts.at(-2)! + rem_jokers >= 2 || rem_jokers >= 2)
      return 3.5;
    return 3;
  }

  if (amounts.at(-1)! + jokers >= 2) {
    const rem_jokers = amounts.at(-1)! + jokers - 2;
    if (amounts.length >= 2 && amounts.at(-2)! + rem_jokers >= 2 || rem_jokers >= 2)
      return 2.5;
    return 2;
  }

  return 1;
}

function handsComparatorP2(a: CamelCards, b: CamelCards) {
  const nominal : Record<string, number> = { A: 13, K: 12, Q: 11, T: 10, 9: 9, 8: 8, 7: 7, 6: 6, 5: 5, 4: 4, 3: 3, 2: 2, J: 1 }

  const na = a.hand.split("").map(ch => nominal[ch]);
  const nb = b.hand.split("").map(ch => nominal[ch]);
  
  const ka = getHandStrengthP2(a.hand);
  const kb = getHandStrengthP2(b.hand);

  if (ka === kb) {
    let i = 0;
    while (na[i] == nb[i]) ++i;
    
    if (na[i] > nb[i]) return 1;
    if (na[i] < nb[i]) return -1;

    return -1;
  }
  if (ka > kb) return 1;
  if (ka < kb) return -1;
  return 0;
}

export function partTwo(text: string): number {
  const hands : CamelCards[] = text.split("\n").map(el => el.split(" ")).map(el => ({ hand: el[0], bid: Number(el[1])}));
  const sorted_hands = hands.toSorted(handsComparatorP2);

  return sorted_hands.reduce((p, c, ci) => p + (c.bid * (ci + 1)), 0);
}
