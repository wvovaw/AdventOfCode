export function partOne(text: string): number {
  const groups = text.split("\n\n");
  const seeds = groups.shift()!.substring(7).split(/\s/).map(Number);
  
  let mappings : number[] = seeds;
  for (const g of groups) {
    const [gname, gnums] = g.split(":");
    const gseries = gnums.trim().split("\n").map(s => s.split(/\s/).map(Number));

    const n : number[] = [];
    for (const el of mappings) {
      const ll = n.length;
      for (const ser of gseries) {
        const [dest, src, len] = ser;
        if (src <= el && el < src + len) {
          n.push(el - src + dest)
          break;
        }
      }
      if (ll === n.length)
        n.push(el);
    }
    mappings = n;
  }

  return Math.min(...mappings);
}
export function partTwo(text: string): number {
  const groups = text.split("\n\n");
  const seeds_ranges = groups.shift()!.substring(7).split(/\s/).map(Number);
  let seeds : [number, number][] = []
  for (let i = 0; i < seeds_ranges.length; i += 2) {
    seeds.push([seeds_ranges[i], seeds_ranges[i] + seeds_ranges[i + 1]])
  }
  
  for (const g of groups) {
    const [gname, gnums] = g.split(":");
    const gseries = gnums.trim().split("\n").map(s => s.split(/\s/).map(Number));

    const n : [number, number][] = [];
    while (seeds.length > 0) {
      const [start, end] = seeds.pop()!;

      const ll = n.length;
      for (const ser of gseries) {
        const [dest, src, len] = ser;
        const os = Math.max(start, src);
        const oe = Math.min(end, src + len);
        if (os < oe) {
          n.push([os - src + dest, oe - src + dest]);
          if (os > start)
            seeds.push([start, os]);
          if (end > oe)
            seeds.push([oe, end]);
          break;
        }
      }
      if (ll === n.length)
        n.push([start, end]);
    }
    seeds = n;
  }

  return Math.min(...seeds.map(s => s[0]));
}
