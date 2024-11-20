import { assertEquals } from "@std/assert";
import { partOne, partTwo } from "./solution.ts";
import readfile from "../lib/readfile.ts";

Deno.test("Puzzle 4", async (t) => {
  const ranges = readfile(import.meta.url, "test.txt");

  await t.step("Part one", () => {
    assertEquals(partOne(ranges), 2);
  });
  await t.step("Part two", () => {
    assertEquals(partTwo(ranges), 4);
  });
});
