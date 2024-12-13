import { assertEquals } from '@std/assert'
import { partOne } from './solution.ts'
import { readfile } from '../lib/textfiels.ts'

Deno.test('Puzzle 8', async (t) => {
  await t.step('Part one', () => {
    const txt = readfile(import.meta.url, 'test.txt')
    assertEquals(partOne(txt), 1928)
  })
})
