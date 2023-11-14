import { partOne, partTwo } from "./solution.ts";

function main() {
  const txt = Deno.readTextFileSync("input.txt");
//   const txt = `30373
// 25512
// 65332
// 33549
// 35390`;

  console.log(partOne(txt));
  // console.log(partTwo(txt));
}

void main();
