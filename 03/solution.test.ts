import { assertEquals } from "assert";
import { partOne, partTwo } from "./solution.ts";
import readfile from "../lib/readfile.ts";

Deno.test("Puzzle 3", async (t) => {
  const rucsacs = readfile(import.meta.url, "test.txt");

  await t.step("Part one", () => {
    assertEquals<number>(partOne(rucsacs), 157);
  });
  await t.step("Part two", () => {
    assertEquals<number>(partTwo(rucsacs), 70);
  });
});
