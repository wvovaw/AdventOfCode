import { assertEquals } from "assert";
import { partOne, partTwo } from "./solution.ts";

Deno.test("Puzzle 3", async (t) => {
  const rucsacs = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

  await t.step("Part one", () => {
    assertEquals<number>(partOne(rucsacs), 157);
  });
  await t.step("Part two", () => {
    assertEquals<number>(partTwo(rucsacs), 70);
  });
});
