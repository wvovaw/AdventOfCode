type Card = {
  my_nums: number[],
  win_nums: number[]
}
function getCards(text: string) : Card[] {
  const cards = text.split("\n").map(c => c.split(": ")[1]).map(c => c.split("|"));
  const pile: Card[] = [];
  for (const c of cards) {
    const win_nums = c[0].replace(/ +/g, " ").trim().split(" ").map(n => +n);
    const my_nums = c[1].replace(/ +/g, " ").trim().split(" ").map(n => +n);
    pile.push({ my_nums, win_nums });
  }
  return pile;
}

export function partOne(text: string): number {
  const cards = getCards(text);

  let sum = 0;
  cards.forEach(card => {
    const p = card.my_nums.filter(n => card.win_nums.includes(n));
    let score = 0;
    p.forEach(n => {
      if (score === 0) score = 1;
      else score = score * 2;
    });
    sum += score;
  })
  return sum;
}
export function partTwo(text: string): number {
  return 0;
}
