import { assertEquals } from "@std/assert";
import { partOne, partTwo } from "./solution.ts";
import readfile from "../lib/readfile.ts";

Deno.test("Puzzle 7", async (t) => {
  const txt = readfile(import.meta.url, "test.txt");

  await t.step("Part one", () => {
    assertEquals(partOne(txt), 95437);
  });
  await t.step("Part two", () => {
    assertEquals(partTwo(txt), 24933642);
  });
});
