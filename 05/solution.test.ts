import { assertEquals } from "assert";
import { partOne } from "./solution.ts";

Deno.test("Puzzle 5", async (t) => {
  const crates = [
    ["Z", "N"],
    ["M", "C", "D"],
    ["P"]
  ]
  const rearranges = [
    [1,2,1],
    [3,1,3],
    [2,2,1],
    [1,1,2]
  ]
  await t.step("Part one", () => {
    assertEquals(partOne(crates, rearranges), "CMZ");
  });
});
