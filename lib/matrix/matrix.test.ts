import { assertEquals, assertThrows } from '@std/assert'
import { matrixToVector } from './index.ts'

Deno.test('matrixToVector', async (t) => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  await t.step('ltr-down', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'ltr-down' }),
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    )
  })
  await t.step('ltr-up', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'ltr-up' }),
      [7, 8, 9, 4, 5, 6, 1, 2, 3],
    )
  })
  await t.step('rtl-down', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'rtl-down' }),
      [3, 2, 1, 6, 5, 4, 9, 8, 7],
    )
  })
  await t.step('rtl-up', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'rtl-up' }),
      [9, 8, 7, 6, 5, 4, 3, 2, 1],
    )
  })
  await t.step('ttb-right', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'ttb-right' }),
      [1, 4, 7, 2, 5, 8, 3, 6, 9],
    )
  })
  await t.step('ttb-left', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'ttb-left' }),
      [3, 6, 9, 2, 5, 8, 1, 4, 7],
    )
  })
  await t.step('btt-right', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'btt-right' }),
      [7, 4, 1, 8, 5, 2, 9, 6, 3],
    )
  })
  await t.step('btt-left', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'btt-left' }),
      [9, 6, 3, 8, 5, 2, 7, 4, 1],
    )
  })
  await t.step('tl-br-upward', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'tl-br-upward' }),
      [1, 4, 2, 7, 5, 3, 8, 6, 9],
    )
  })
  await t.step('tl-br-downward', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'tl-br-downward' }),
      [1, 2, 4, 3, 5, 7, 6, 8, 9],
    )
  })
  await t.step('bl-tr-upward', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'bl-tr-upward' }),
      [7, 8, 4, 9, 5, 1, 6, 2, 3],
    )
  })
  await t.step('bl-tr-downward', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'bl-tr-downward' }),
      [7, 4, 8, 1, 5, 9, 2, 6, 3],
    )
  })
  await t.step('tr-bl-upward', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'tr-bl-upward' }),
      [3, 6, 2, 9, 5, 1, 8, 4, 7],
    )
  })
  await t.step('tr-bl-downward', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'tr-bl-downward' }),
      [3, 2, 6, 1, 5, 9, 4, 8, 7],
    )
  })
  await t.step('br-tl-upward', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'br-tl-upward' }),
      [9, 8, 6, 7, 5, 3, 4, 2, 1],
    )
  })
  await t.step('br-tl-downward', () => {
    assertEquals(
      matrixToVector(matrix, { direction: 'br-tl-downward' }),
      [9, 6, 8, 3, 5, 7, 2, 4, 1],
    )
  })

  await t.step('invalid direction', () => {
    try {
      assertThrows(
        // deno-lint-ignore no-explicit-any
        () => matrixToVector(matrix, { direction: 'invalid' as any }),
      )
    } catch (e: unknown) {
      assertEquals((e as Error).message, 'Unsupported direction: invalid')
    }
  })
})
