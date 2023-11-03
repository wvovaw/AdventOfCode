import { assertEquals } from "assert";
import { partOne, partTwo } from "./solution.ts";

Deno.test("Puzzle 7", async (t) => {
  const txt = `$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
`;

  await t.step("Part one", () => {
    assertEquals(partOne(txt), 95437);
  });
  await t.step("Part two", () => {
    assertEquals(partTwo(txt), 24933642);
  });
});
