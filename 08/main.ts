import { readfile } from '../lib/textfiels.ts'
import { partOne } from './solution.ts'

function main() {
  const txt = readfile(import.meta.url, 'input.txt')
  console.log(partOne(txt))
}

void main()
