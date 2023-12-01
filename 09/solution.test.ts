import { assertEquals } from "assert";
import { isAdjacent, partOne, partTwo } from "./solution.ts";

Deno.test("Puzzle 9", async (t) => {
  const txt1 = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

  await t.step("Part one", async (t) => {
    await t.step("isAdjacent", async (t) => {
      await t.step("should return true for adjacent by side", () => {
        assertEquals(isAdjacent(0, 0, 0, 1), true);
        assertEquals(isAdjacent(0, 0, 1, 0), true);
        assertEquals(isAdjacent(3, 4, 3, 5), true);
        assertEquals(isAdjacent(3, 4, 4, 4), true);
        assertEquals(isAdjacent(-2, -3, -2, -4), true);
        assertEquals(isAdjacent(-2, -3, -3, -3), true);
      });
      await t.step("should return true for adjacent by corner", () => {
        assertEquals(isAdjacent(0, 0, 1, 1), true);
        assertEquals(isAdjacent(0, 0, -1, -1), true);
        assertEquals(isAdjacent(3, 4, 4, 5), true);
        assertEquals(isAdjacent(3, 4, 2, 3), true);
        assertEquals(isAdjacent(-2, -3, -3, -4), true);
        assertEquals(isAdjacent(-2, -3, -1, -2), true);
      });
      await t.step("should return false for not adjacent", () => {
        assertEquals(isAdjacent(0, 0, 2, 2), false);
        assertEquals(isAdjacent(1, 0, -1, -3), false);
        assertEquals(isAdjacent(3, 4, -3, -4), false);
        assertEquals(isAdjacent(3, 4, 3, 2), false);
      });
    });

    assertEquals(partOne(txt1), 13);
  });

  const txt2 = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

  await t.step("Part two", async (t) => {
    assertEquals(partTwo(txt2), 36);
  });
});
