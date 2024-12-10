function combinationsReq(length: number, prefix = ''): string[] {
  if (length === 0) {
    return [prefix]
  }
  return [
    ...combinationsReq(length - 1, prefix + '*'),
    ...combinationsReq(length - 1, prefix + '+'),
  ]
}

export function partOne(text: string): number {
  const input: [number, number[]][] = text
    .split('\n')
    .map((r) => r.split(':'))
    .map((r) => [parseInt(r[0]), r[1].trim().split(' ').map(Number)])

  const sumOfValid = []
  for (const row of input) {
    const operands = row[1]
    for (const comb of combinationsReq(operands.length - 1)) {
      const operators = comb.split('')

      let res = operands[0]
      for (let i = 0; i < operators.length; ++i) {
        if (operators[i] === '+') {
          res += operands[i + 1]
        }
        if (operators[i] === '*') {
          res *= operands[i + 1]
        }
      }

      if (res === row[0]) {
        sumOfValid.push(res)
        break
      }
    }
  }
  return sumOfValid.reduce((a, c) => a + c, 0)
}
