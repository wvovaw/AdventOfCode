// deno-lint-ignore no-explicit-any
type Command = (...args: any[]) => any

const commands = new Map<string, Command>()
commands.set('add', (x: number, y: number): number => x + y)
commands.set('mul', (x: number, y: number): number => x * y)

function interpreter(program: string) {
  const instructionRx = /(\w+)\(([^)]*)\)/
  try {
    const match = program.match(instructionRx) || []
    const command = match[1]
    const args = match[2].split(',')
    return commands.get(command)?.apply({}, args)
  } catch {
    throw new Error('Unprocessable programm')
  }
}

export function partOne(jumbledProgram: string): number {
  const mulRx = /mul\(\d{1,3}\,\d{1,3}\)/g
  const instructions = jumbledProgram.match(mulRx) || []

  const res = instructions
    .map(interpreter)
    .reduce((acc, cur) => acc + cur, 0)

  return res
}
