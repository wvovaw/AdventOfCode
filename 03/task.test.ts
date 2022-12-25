import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { partOne, partTwo } from "./main.ts";

Deno.test("Puzzle 3", () => {
  // puzzle example input
  const rucsacs = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;
  assertEquals(partOne(rucsacs), 157);
  assertEquals(partTwo(rucsacs), 70);
});
