import { assertEquals } from "@std/assert";
import { partOne, partTwo } from "./solution.ts";

Deno.test("Puzzle 5", async (t) => {
  const crates: string[][] = [["Z", "N"], ["M", "C", "D"], ["P"]];
  const rearranges: [number, number, number][] = [
    [1, 2, 1],
    [3, 1, 3],
    [2, 2, 1],
    [1, 1, 2],
  ];
  await t.step("Part one", () => {
    assertEquals(partOne(crates, rearranges), "CMZ");
  });
  await t.step("Part two", () => {
    assertEquals(partTwo(crates, rearranges), "MCD");
  });
});
