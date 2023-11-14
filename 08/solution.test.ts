import { assertEquals } from "assert";
import { partOne } from "./solution.ts";

Deno.test("Puzzle 8", async (t) => {
  const txt = `30373
25512
65332
33549
35390`;

  await t.step("Part one", () => {
    assertEquals(partOne(txt), 21);
  });
});
