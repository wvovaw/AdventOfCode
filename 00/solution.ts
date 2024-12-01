function getTwoList(lines: string[]): [number[], number[]] {
  const lists: [number[], number[]] = [[], []]
  for (const line of lines) {
    const pair = line.split(/\s+/)
    lists[0].push(Number(pair[0]))
    lists[1].push(Number(pair[1]))
  }

  return lists
}

export function partOne(text: string): number {
  const lines = text.split('\n')

  const [list1, list2] = getTwoList(lines)
  list1.sort()
  list2.sort()

  let res = 0
  for (let i = 0; i < list1.length; ++i) {
    res += Math.abs(list1[i] - list2[i])
  }

  return res
}

export function partTwo(text: string): number {
  const lines = text.split('\n')
  const [list1, list2] = getTwoList(lines)

  let res = 0
  for (let i = 0; i < list1.length; ++i) {
    const num = list1[i]
    let counter = 0

    for (const right of list2) {
      if (right === list1[i]) {
        counter++
      }
    }

    res += num * counter
  }
  return res
}
