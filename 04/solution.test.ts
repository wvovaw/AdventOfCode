import { assertEquals } from "assert";
import { partOne, partTwo } from "./solution.ts";

Deno.test("Puzzle 4", async (t) => {
  const ranges = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
  await t.step("Part one", () => {
    assertEquals(partOne(ranges), 2);
  });
  await t.step("Part two", () => {
    assertEquals(partTwo(ranges), 4);
  });
});
