import { assertEquals } from '@std/assert'
import { partOne, partTwo } from './solution.ts'
import { readfile } from '../lib/textfiels.ts'

Deno.test('Puzzle 0', async (t) => {
  await t.step('Part one', () => {
    const txt = readfile(import.meta.url, 'test.txt')
    assertEquals(partOne(txt), 18)
  })

  await t.step('Part two', () => {
    const txt = readfile(import.meta.url, 'test2.txt')
    assertEquals(partTwo(txt), 9)
  })
})
