// deno-lint-ignore no-explicit-any
type Command = (...args: any[]) => any

const commands = new Map<string, Command>()
commands.set('add', (x: number, y: number): number => x + y)
commands.set('mul', (x: number, y: number): number => x * y)
commands.set("don't", () => 'DONT')
commands.set('do', () => 'DO')

function interpreter(program: string) {
  const instructionRx = /([A-Za-z\/\s\.'-]+)\(([^)]*)\)/
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

export function partTwo(jumbledProgram: string): number {
  const mulRx = /(don?\'?t?)\(\)|(mul)\(\d{1,3}\,\d{1,3}\)/g
  const instructions = jumbledProgram.match(mulRx) || []

  let lock: boolean = false

  const res = instructions
    .map(interpreter)
    .reduce((acc, cur) => {
      if (typeof cur !== 'number') {
        if (cur === 'DONT') {
          lock = true
        }
        if (cur === 'DO') {
          lock = false
        }
        return acc
      } else if (lock) {
        return acc
      } else return acc + cur
    }, 0)

  return res
}
