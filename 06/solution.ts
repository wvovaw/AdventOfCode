export function partOne(text: string): number {
  const [times, records] = text.split("\n").map(e => e.split(" ").map(Number));

  const races : {time: number, record: number }[] = [];
  times.forEach((_, i) => races.push({ time: times[i], record: records[i] }))

  const wincond : number[] = [];
  for (const race of races) {
    let cnt = 0;
    for (let i = 0; i < race.time; ++i) {
      const dist = i * (race.time - i);
      if (dist > race.record) cnt++;
    }
    wincond.push(cnt);
  }

  return wincond.reduce((acc, cur) => acc * cur, 1);
}
export function partTwo(text: string): number {
  const [time, record] = text.split("\n").map(e => Number(e.replaceAll(" ", "")));

    let cnt = 0;
    for (let i = 0; i < time; ++i) {
      const dist = i * (time - i);
      if (dist > record) cnt++;
    }

  return cnt;
}
