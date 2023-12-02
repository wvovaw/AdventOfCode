import { assertEquals } from "assert";
import { countScenicScore, Matrix, partOne, partTwo } from "./solution.ts";
import readfile from "../lib/readfile.ts";

Deno.test("Puzzle 8", async (t) => {
  const txt = readfile(import.meta.url, "test.txt");

  await t.step("Part one", () => {
    assertEquals(partOne(txt), 21);
  });

  await t.step("Part two", async (t) => {
    const m = new Matrix(txt);

    await t.step("countScenicScore", () => {
      const i1 = m.getIntersection({ x: 1, y: 2 });
      assertEquals(countScenicScore(i1), 4);
      const i2 = m.getIntersection({ x: 3, y: 2 });
      assertEquals(countScenicScore(i2), 8);
    });

    assertEquals(partTwo(txt), 8);
  });
});
