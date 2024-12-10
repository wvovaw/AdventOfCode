const DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]] as const

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

function willItLoop(m: string[][], oi: number, oj: number): boolean {
  const mm = structuredClone(m)
  mm[oi][oj] = '#'
  const MAX_ROWS = mm.length
  const MAX_COLS = Math.max(...mm.map((r) => r.length))

  let i = 0, j = 0
  const visited = new Set<string>()
  // Find initial guard pos
  for (let x = 0; x < MAX_ROWS; x++) {
    for (let y = 0; y < MAX_COLS; y++) {
      if (mm[x][y] === '^') {
        i = x
        j = y
      }
    }
  }
  let dir = 0
  do {
    const d = DIRECTIONS[dir]
    const i1 = i + d[0], j1 = j + d[1]

    if ((i1 < 0 || i1 >= MAX_ROWS) || (j1 < 0 || j1 >= MAX_COLS)) {
      break
    } else if (visited.has(`${i1},${j1},${dir}`)) return true

    if (mm[i1][j1] === '#') {
      dir = (dir + 1) % DIRECTIONS.length
    } else {
      visited.add(`${i1},${j1},${dir}`)
      i = i1
      j = j1
    }
  } while (true)
  return false
}

export function partOne(text: string): number {
  const m = text.split('\n').map((r) => r.split(''))
  return findAllVisitedSpots(m).size
}

export function partTwo(text: string): number {
  const m = text.split('\n').map((r) => r.split(''))
  const path = Array.from(findAllVisitedSpots(m)).map((p) => p.split(',').map(Number))

  let count = 0
  for (let i = 0; i < path.length; ++i) {
    console.clear()
    console.log('%d / %d', i, path.length)
    const l = willItLoop(m, path[i][0], path[i][1])
    count += Number(l)
  }

  return count
}
