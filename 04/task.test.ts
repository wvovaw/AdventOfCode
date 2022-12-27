import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { partOne, partTwo } from "./main.ts";

Deno.test("Puzzle 4", () => {
  // puzzle example input
  const ranges = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
  assertEquals(partOne(ranges), 2);
  assertEquals(partTwo(ranges), 4);
});
