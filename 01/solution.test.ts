import { assertEquals } from "assert";
import { partOne, partTwo } from "./solution.ts";

Deno.test("Puzzle 1", async (t) => {
  const txt1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

  await t.step("Part one", async (t) => {
    assertEquals(partOne(txt1), 142);
  });

const txt2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

  await t.step("Part two", async (t) => {
    assertEquals(partTwo(txt2), 281);
  });
});
