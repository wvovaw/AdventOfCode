type Coord = { x: number; y: number };
type Intersection = [{ v: number[]; c: number }, { v: number[]; c: number }];

export class Matrix {
  private _buffer: Array<Array<number>>;

  public get bufer() {
    return this._buffer;
  }

  public getIntersection(c: Coord): Intersection {
    const horizontal = this._buffer[c.x];
    const vertical = [];
    for (let i = 0; i < this._buffer.length; ++i)
      vertical.push(this._buffer[i][c.y]);

    return [
      { v: horizontal, c: c.y },
      { v: vertical, c: c.x },
    ];
  }

  constructor(text?: string) {
    this._buffer = [];
    if (text) {
      const lines = text.split("\n");
      lines.forEach((line) =>
        this._buffer.push(line.split("").map((ch) => Number(ch)))
      );
    }
  }
}

function isCenterVisible(intersection: Intersection): boolean {
  /** tree is visible if:
   * - if every number on the (left / right ) is less than it
   */
  for (const int of intersection) {
    const vec = int.v;
    const centerIx = int.c;

    let localMaxC = 0;
    for (let i = 0; i <= centerIx; ++i) {
      if (vec[i] > vec[localMaxC]) {
        localMaxC = i;
      }
    }
    if (localMaxC == centerIx) return true;

    localMaxC = vec.length - 1;
    for (let i = vec.length - 1; i >= centerIx; --i) {
      if (vec[i] > vec[localMaxC]) {
        localMaxC = i;
      }
    }
    if (localMaxC == centerIx) return true;
  }

  return false;
}

function countVisible(trees: Matrix) {
  let counter = trees.bufer.length * 4 - 4;

  for (let i = 1; i < trees.bufer.length - 1; ++i) {
    for (let j = 1; j < trees.bufer.length - 1; ++j) {
      const int = trees.getIntersection({ x: i, y: j });
      const isVisible = isCenterVisible(int);
      if (isVisible) counter++;
    }
  }
  return counter;
}

export function countScenicScore(intersection: Intersection): number {
  const scenics = [];

  for (const int of intersection) {
    const left = int.v.slice(0, int.c).reverse();
    const n = int.v[int.c];
    const right = int.v.slice(int.c + 1);

    for (const dir of [left, right]) {
      let counter = 0;
      for (let i = 0; i < dir.length; ++i) {
        if (dir[i] >= n) {
          counter++;
          break;
        }
        else counter++;
      }
      scenics.push(counter);
    }
  }
  return scenics.reduce((acc, cur) => acc * cur, 1);
}


function findMaxScenicScore(trees: Matrix): number {
  const scenicScores = [];
  for (let i = 0; i < trees.bufer.length; ++i) {
    for (let j = 0; j < trees.bufer.length; ++j) {
      const int = trees.getIntersection({ x: i, y: j });
      scenicScores.push(countScenicScore(int));
    }
  }
  return Math.max(...scenicScores);
}

export function partOne(text: string): number {
  const tm = new Matrix(text);
  return countVisible(tm);
}

export function partTwo(text: string): number {
  const tm = new Matrix(text);
  return findMaxScenicScore(tm);
}
