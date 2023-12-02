import { assertEquals } from "assert";
import { countScenicScore, Matrix, partOne, partTwo } from "./solution.ts";

Deno.test("Puzzle 8", async (t) => {
  const txt = `30373
25512
65332
33549
35390`;

  await t.step("Part one", () => {
    assertEquals(partOne(txt), 21);
  });

  await t.step("Part two", async (t) => {
    const m = new Matrix(txt);

    await t.step("countScenicScore", () => {
      let i1 = m.getIntersection({ x: 1, y: 2 });
      assertEquals(countScenicScore(i1), 4);
      let i2 = m.getIntersection({ x: 3, y: 2 });
      assertEquals(countScenicScore(i2), 8);
    });

    assertEquals(partTwo(txt), 8);
  });
});
