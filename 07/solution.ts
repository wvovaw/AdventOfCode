type Input = string[][]
type Coord = [number, number] // [x,y]

function parseInput(text: string): Input {
  return text
    .split('\n')
    .map((r) => r.split(''))
}

export function partOne(text: string): number {
  const m = parseInput(text)
  const MAX_ROWS = m.length
  const MAX_COLS = Math.max(...m.map((r) => r.length))

  function isInArea(x: number, y: number): boolean {
    return ((x >= 0 && x < MAX_ROWS) && (y >= 0 && y < MAX_COLS))
  }

  // Group antennas by its freq
  const groups = new Map<string, Set<string>>()
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      const c = m[i][j]
      if (/[a-zA-Z0-9]/.test(c)) {
        const g = groups.get(c)
        if (g) {
          g.add(`${i},${j}`)
        } else {
          groups.set(c, new Set([`${i},${j}`]))
        }
      }
    }
  }

  // Find all antinodes in the area
  const antinodes = new Set<string>()
  for (const g of groups.values()) {
    const v = g.values().toArray()
    // Finding antinodes for every pair of the same antennas
    for (let i = 0; i < v.length - 1; i++) {
      for (let j = i + 1; j < v.length; j++) {
        const [x1, y1] = v[i].split(',').map(Number) as Coord
        const [x2, y2] = v[j].split(',').map(Number) as Coord

        const a1: Coord = [NaN, NaN], a2: Coord = [NaN, NaN]

        if (x1 > x2) {
          a1[0] = x1 + Math.abs(x1 - x2)
          a2[0] = x2 - Math.abs(x1 - x2)
        } else {
          a1[0] = x1 - Math.abs(x2 - x1)
          a2[0] = x2 + Math.abs(x2 - x1)
        }

        if (y1 > y2) {
          a1[1] = y1 + Math.abs(y1 - y2)
          a2[1] = y2 - Math.abs(y1 - y2)
        } else {
          a1[1] = y1 - Math.abs(y2 - y1)
          a2[1] = y2 + Math.abs(y2 - y1)
        }

        if (isInArea(...a1)) {
          antinodes.add(a1.join(','))
        }
        if (isInArea(...a2)) {
          antinodes.add(a2.join(','))
        }
      }
    }
  }
  return antinodes.size
}

export function partTwo(text: string): number {
  return 0
}
