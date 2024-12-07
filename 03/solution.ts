export function partOne(text: string): number {
  const m = text.split('\n').map((row) => row.split(''))

  const MAX_ROWS = m.length
  const MAX_COLS = Math.max(...m.map((r) => r.length))

  let counter = 0

  for (let i = 0; i < MAX_ROWS; ++i) {
    for (let j = 0; j < MAX_COLS; ++j) {
      if (m[i][j] === 'X') {
        // on the right
        if (
          m[i][j + 1] === 'M' && m[i][j + 2] === 'A' && m[i][j + 3] === 'S'
        ) {
          counter++
        }

        // on the bot
        if (
          (m[i + 1] && m[i + 2] && m[i + 3]) &&
          m[i + 1][j] === 'M' &&
          m[i + 2][j] === 'A' &&
          m[i + 3][j] === 'S'
        ) {
          counter++
        }

        // on the left
        if (
          (m[j - 1] && m[j - 2] && m[j - 3]) &&
          m[i][j - 1] === 'M' &&
          m[i][j - 2] === 'A' &&
          m[i][j - 3] === 'S'
        ) {
          counter++
        }

        // on the top
        if (
          (m[i - 1] && m[i - 2] && m[i - 3]) &&
          m[i - 1][j] === 'M' &&
          m[i - 2][j] === 'A' && m[i - 3][j] === 'S'
        ) {
          counter++
        }

        // on the top right
        if (
          (m[i - 1] && m[i - 2] && m[i - 3]) &&
          m[i - 1][j + 1] === 'M' && m[i - 2][j + 2] === 'A' &&
          m[i - 3][j + 3] === 'S'
        ) {
          counter++
        }

        // on the bot right
        if (
          (m[i + 1] && m[i + 2] && m[i + 3]) &&
          m[i + 1][j + 1] === 'M' && m[i + 2][j + 2] === 'A' &&
          m[i + 3][j + 3] === 'S'
        ) {
          counter++
        }

        // on the bot left
        if (
          (m[i + 1] && m[i + 2] && m[i + 3]) &&
          m[i + 1][j - 1] === 'M' && m[i + 2][j - 2] === 'A' &&
          m[i + 3][j - 3] === 'S'
        ) {
          counter++
        }

        // on the top left
        if (
          (m[i - 1] && m[i - 2] && m[i - 3]) &&
          m[i - 1][j - 1] === 'M' && m[i - 2][j - 2] === 'A' &&
          m[i - 3][j - 3] === 'S'
        ) {
          counter++
        }
      }
    }
  }

  return counter
}
