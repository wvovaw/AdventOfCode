type Card = {
  my_nums: number[];
  win_nums: number[];
};
function getCards(text: string): Card[] {
  const cards = text.split("\n").map((c) => c.split(": ")[1]).map((c) => c.split("|"));
  const pile: Card[] = [];
  for (const c of cards) {
    const win_nums = c[0].replace(/ +/g, " ").trim().split(" ").map((n) => +n);
    const my_nums = c[1].replace(/ +/g, " ").trim().split(" ").map((n) => +n);
    pile.push({ my_nums, win_nums });
  }
  return pile;
}

export function partOne(text: string): number {
  const cards = getCards(text);

  let sum = 0;
  cards.forEach((card) => {
    const p = card.my_nums.filter((n) => card.win_nums.includes(n));
    let score = 0;
    p.forEach((n) => {
      if (score === 0) score = 1;
      else score = score * 2;
    });
    sum += score;
  });
  return sum;
}

export function partTwo(text: string): number {
  type Card2 = Card & { n: number };

  const cards = (getCards(text) as Card2[]).map((card) => ({ ...card, n: 1 }));

  for (let i = 0; i < cards.length; ++i) {
    const score = cards[i].my_nums.filter((n) => cards[i].win_nums.includes(n)).length;

    for (let x = i + 1; x <= score + i; ++x) {
      cards[x].n += cards[i].n;
    }
  }
  const total = cards.map((c) => c.n).reduce((acc, cur) => acc + cur, 0);
  return total;
}
