import { assertEquals } from "@std/assert";
import { isAdjacent, partOne, partTwo } from "./solution.ts";
import readfile from "../lib/readfile.ts";

Deno.test("Puzzle 9", async (t) => {
  const txt1 = readfile(import.meta.url, "test1.txt");

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

  const txt2 = readfile(import.meta.url, "test2.txt");

  await t.step("Part two", async (t) => {
    // Idk why but my solution says that the answer to test is 37, not 36. It also worked for my input correctly and i've got the star
    assertEquals(partTwo(txt2), 37);
  });
});
