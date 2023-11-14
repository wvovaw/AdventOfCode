type Coord = { x: number; y: number };
type Intersection = [{ v: number[]; c: number }, { v: number[]; c: number }];

class Matrix {
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

function isCenterVisible(intersection: Intersection) {
  /** tree is visible if:
   * - if every number on the (left / right ) is less than it
   */
  for (const el of intersection) {
    const vec = el.v;
    const centerIx = el.c;

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

export function partOne(text: string) {
  const tm = new Matrix(text);

  return countVisible(tm);
}
