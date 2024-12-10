type Input = [number, number[]][]

function parseInput(text: string): Input {
  return text
    .split('\n')
    .map((r) => r.split(':'))
    .map((r) => [parseInt(r[0]), r[1].trim().split(' ').map(Number)])
}

function combinationsReq(length: number, alph: string[], prefix = ''): string[] {
  if (length === 0) {
    return [prefix]
  }
  return alph.map((ch) => (combinationsReq(length - 1, alph, prefix + ch))).flat()
}

function evaluator(
  input: Input,
  operations: Record<string, (a: number, b: number) => number>,
): number {
  const sumOfValid = []
  for (const row of input) {
    const nums = row[1]
    for (const opsComb of combinationsReq(nums.length - 1, Object.keys(operations))) {
      const operators = opsComb.split('')
      let res: number = nums[0]
      for (let i = 0; i < operators.length; ++i) {
        res = operations[operators[i]](res, nums[i + 1])
      }

      if (res === row[0]) {
        sumOfValid.push(res)
        break
      }
    }
  }
  return sumOfValid.reduce((a, c) => a + c, 0)
}

export function partOne(text: string): number {
  const input = parseInput(text)
  return evaluator(input, {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
  })
}

export function partTwo(text: string): number {
  const input = parseInput(text)
  return evaluator(input, {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '~': (a, b) => parseInt(a.toString().concat(b.toString())),
  })
}
