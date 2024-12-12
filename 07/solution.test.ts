import { assertEquals } from '@std/assert'
import { partOne, partTwo } from './solution.ts'
import { readfile } from '../lib/textfiels.ts'

Deno.test('Puzzle 7', async (t) => {
  await t.step('Part one', () => {
    const txt = readfile(import.meta.url, 'test.txt')
    assertEquals(partOne(txt), 14)
  })
  await t.step('Part Two', () => {
    const txt = readfile(import.meta.url, 'test.txt')
    assertEquals(partTwo(txt), 0)
  })
})
