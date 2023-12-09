import { assertEquals } from "assert";
import { partOne, partTwo } from "./solution.ts";
import readfile from "../lib/readfile.ts";

Deno.test("Puzzle 5", async (t) => {
  const txt = readfile(import.meta.url, "test.txt");

  await t.step("Part one", async (t) => {
    assertEquals(partOne(txt), 35);
  });
  await t.step("Part two", async (t) => {
    assertEquals(partTwo(txt), 46);
  });
});