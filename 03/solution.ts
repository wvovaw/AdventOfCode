type Coord = {
  x: number;
  y: number;
};
type Num = {
  n: number,
  coords: Coord[]
}

function isDigit(char: string) {
  return !Number.isNaN(Number(char));
}
function isSymbol(char: string) {
  return !isDigit(char) && char !== ".";
}
function isAdjacent(c1: Coord, c2: Coord) {
  const dx = Math.abs(c2.x - c1.x);
  const dy = Math.abs(c2.y - c1.y);
  return dx <= 1 && dy <= 1;
}

export function partOne(text: string): number {
  const m = text.split("\n").map((r) => r.split(""));

  const nums : Num[] = [];
  const symbs : Coord[] = [];

  for (let i = 0; i < m.length; ++i) {
    let n = "";
    let nc : Coord[] = [];
    for (let j = 0; j < m[i].length; ++j) {
      const c = m[i][j];
      if (isDigit(c)) {
        n += c;
        nc.push({x: i, y: j});
      }
      else if (isSymbol(c)) {
        symbs.push({x: i, y: j});
      }

      if (!isDigit(c) || j === m[i].length - 1) {
        if (n.length > 0) {
          const numb = Number(n);
          nums.push({
            n: numb,
            coords: nc
          });
          n = "";
          nc = [];
        }
      }
    }
  }

  // ))))
  let sum = 0;
  nums.forEach(num => {
    let cool = false;
    num.coords.forEach(c => {
      symbs.forEach(sym => {
        if (isAdjacent(c, sym)) cool = true;
      })
    });
    if (cool) sum += num.n;
  })
  return sum;
}
export function partTwo(text: string): number {
  const m = text.split("\n").map((r) => r.split(""));

  const nums : Num[] = [];
  const gears : Coord[] = [];

  for (let i = 0; i < m.length; ++i) {
    let n = "";
    let nc : Coord[] = [];
    for (let j = 0; j < m[i].length; ++j) {
      const c = m[i][j];
      if (isDigit(c)) {
        n += c;
        nc.push({x: i, y: j});
      }
      else if (isSymbol(c)) {
        gears.push({x: i, y: j});
      }

      if (!isDigit(c) || j === m[i].length - 1) {
        if (n.length > 0) {
          const numb = Number(n);
          nums.push({
            n: numb,
            coords: nc
          });
          n = "";
          nc = [];
        }
      }
    }
  }

  let sum = 0;
  gears.forEach(gear => {
    const adj : number[] = [];

    for (const num of nums) {
      for (const co of num.coords) {
        if (isAdjacent(co, gear)) {
          adj.push(num.n);
          break;
        }
      }
    }
    if (adj.length === 2) sum += adj[0] * adj[1];
  })
  return sum;
}
