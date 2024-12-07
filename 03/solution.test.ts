import { assertEquals } from '@std/assert'
import { partOne } from './solution.ts'
import { readfile } from '../lib/textfiels.ts'

Deno.test('Puzzle 0', async (t) => {
  const txt = readfile(import.meta.url, 'test.txt')
  await t.step('Part one', () => {
    assertEquals(partOne(txt), 18)
  })
})
