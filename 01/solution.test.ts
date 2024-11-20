import { assertEquals } from "@std/assert";
import { partOne, partTwo } from "./solution.ts";
import readfile from "../lib/readfile.ts";

Deno.test("Puzzle 1", async (t) => {
  const txt1 = readfile(import.meta.url, "test1.txt");
  await t.step("Part one", async (t) => {
    assertEquals(partOne(txt1), 142);
  });

  const txt2 = readfile(import.meta.url, "test2.txt");
  await t.step("Part two", async (t) => {
    assertEquals(partTwo(txt2), 281);
  });
});
