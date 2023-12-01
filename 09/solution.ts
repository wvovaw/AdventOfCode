export const isAdjacent = (x1: number, y1: number, x2: number, y2: number) => {
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  return dx <= 1 && dy <= 1;
};

export function partOne(text: string): number {
  /**
   * 1. Change head coordinates according to move instruction
   * 2. Check if current head coordinate is adjacent with the tail coordinate
   * 3. If they're not adjacent - move tail according to head movement
   * 4. Remember the new one tail coordinate in Set
   */
  const operations = text.split("\n");
  const D = {
    "U": [0, 1],
    "D": [0, -1],
    "R": [1, 0],
    "L": [-1, 0],
  };
  let hx = 0, hy = 0;
  let tx = 0, ty = 0;
  const visited = new Set<string>([String([tx, ty])]);

  const move = ([dx, dy]: [number, number], steps: number) => {
    for (const _ of Array(steps)) {
      hx += dx;
      hy += dy;
      if (!isAdjacent(hx, hy, tx, ty)) {
        // if H and T not on the same row or column
        // then place tail on the previous head coord
        if (hx !== tx && hy !== ty) {
          tx = hx - dx;
          ty = hy - dy;
        }
        else {
          if (hx === tx) {
            ty += dy;
          } else {
            tx += dx;
          }
        }
        visited.add(String([tx, ty]));
      }
    }
  };

  for (const op of operations) {
    const [dir, steps] = op.split(" ");
    // @ts-ignore
    move(D[dir], Number(steps));
  }
  return visited.size;
}

export function partTwo(text: string): number {
  return 0;
}
