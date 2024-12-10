const DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]] as const

export function partOne(text: string): number {
  const m = text.split('\n').map((r) => r.split(''))
  return findAllVisitedSpots(m).size
}

function findAllVisitedSpots(m: string[][]): Set<string> {
  const MAX_ROWS = m.length
  const MAX_COLS = Math.max(...m.map((r) => r.length))

  let i = 0, j = 0
  // Find initial guard pos
  for (let x = 0; x < m.length; x++) {
    for (let y = 0; y < m[x].length; y++) {
      if (m[x][y] === '^') {
        i = x
        j = y
      }
    }
  }

  // Save curren guard
  let dir = 0
  const visited = new Set<string>()
  do {
    visited.add(i + ',' + j)

    const d = DIRECTIONS[dir]
    const i1 = i + d[0], j1 = j + d[1]
    if ((i1 < 0 || i1 >= MAX_ROWS) || (j1 < 0 || j1 >= MAX_COLS)) {
      break
    }

    if (m[i1][j1] === '#') {
      dir = (dir + 1) % DIRECTIONS.length
    } else {
      i = i1
      j = j1
    }
  } while (true)

  return visited
}

