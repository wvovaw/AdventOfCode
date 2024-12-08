const DirectionsDiffs = {
  '<': [0, -1],
  '>': [0, 1],
  'V': [1, 0],
  '^': [-1, 0],
} as const
type GuardPos = keyof typeof DirectionsDiffs

const DIRECTIONS: readonly GuardPos[] = ['<', 'V', '>', '^'] as const

function rotate90(currentDir: GuardPos): GuardPos {
  const DIRECTION_ROTATIONS: { [key: string]: GuardPos } = {
    '^': '>',
    '>': 'V',
    'V': '<',
    '<': '^',
  }
  return DIRECTION_ROTATIONS[currentDir]
}

export function partOne(text: string): number {
  const m = text.split('\n').map((r) => r.split(''))
  const MAX_ROWS = m.length
  const MAX_COLS = Math.max(...m.map((r) => r.length))

  let i = 0, j = 0
  // Find initial guard pos
  for (let x = 0; x < m.length; x++) {
    for (let y = 0; y < m[x].length; y++) {
      if (DIRECTIONS.includes(m[x][y] as GuardPos)) {
        i = x
        j = y
      }
    }
  }

  // Save curren guard
  let guard: GuardPos = m[i][j] as GuardPos
  do {
    let di = 0, dj = 0
    if (DIRECTIONS.includes(m[i][j] as GuardPos)) {
      if (m[i][j] === '<') {
        guard = '<'
      } else if (m[i][j] === '^') {
        guard = '^'
      } else if (m[i][j] === '>') {
        guard = '>'
      } else if (m[i][j] === 'V') {
        guard = 'V'
      }
      ;[di, dj] = DirectionsDiffs[guard]
    }

    const i1 = i + di, j1 = j + dj
    if ((i1 < 0 || i1 >= MAX_ROWS) || (j1 < 0 || j1 >= MAX_COLS)) {
      break
    }

    if (m[i1][j1] === '#') {
      m[i][j] = rotate90(guard)
    } else {
      m[i1][j1] = guard
      m[i][j] = 'X'
      i = i1
      j = j1
    }
  } while (true)

  // console.log(m.map((r) => r.join('')).join('\n'))
  const visited = m.reduce((acc, cur) => {
    const xes = cur.filter((ch) => {
      if (ch === 'X') return true
    })
    return acc + xes.length
  }, 1)
  return visited
}
