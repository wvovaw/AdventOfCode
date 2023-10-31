import { assertEquals } from "assert";
import { partOne, partTwo } from "./solution.ts";

Deno.test("Puzzle 6", async (t) => {
  type testInputs = [string, number, number];
  const case1: testInputs = ["bvwbjplbgvbhsrlpgdmjqwftvncz", 5, 23];
  const case2: testInputs = ["nppdvjthqldpwncqszvftbrmjlhg", 6, 23];
  const case3: testInputs = ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 10, 29];
  const case4: testInputs = ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 11, 26];

  await t.step("Part one", () => {
    assertEquals(partOne(case1[0]), case1[1]);
    assertEquals(partOne(case2[0]), case2[1]);
    assertEquals(partOne(case3[0]), case3[1]);
    assertEquals(partOne(case4[0]), case4[1]);
  });
  await t.step("Part two", () => {
    assertEquals(partTwo(case1[0]), case1[2]);
    assertEquals(partTwo(case2[0]), case2[2]);
    assertEquals(partTwo(case3[0]), case3[2]);
    assertEquals(partTwo(case4[0]), case4[2]);
  });
});
