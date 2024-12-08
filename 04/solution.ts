export function partOne(text: string): number {
  const [orderingText, updateText] = text.split('\n\n')
  const orderingRules: [number, number][] = orderingText.split('\n')
    .map((r) => {
      const xy = r.split('|')
      return [parseInt(xy[0]), parseInt(xy[1])]
    })
  const updates: number[][] = updateText.split('\n')
    .map((r) => (r.split(',').map(Number)))

  const centers: number[] = []
  for (const upd of updates) {
    let isCorrect = true

    orderingRules.forEach((r) => {
      const x = upd.indexOf(r[0])
      const y = upd.indexOf(r[1])

      if (x >= 0 && y >= 0 && x > y) isCorrect = false
    })

    if (isCorrect) centers.push(upd[Math.floor(upd.length / 2)])
  }
  return centers.reduce((a, c) => (a + c), 0)
}
