import { partOne, partTwo } from "./solution.ts";

function main() {
  const text = Deno.readTextFileSync("input.txt");
  console.log("part 1: ", partOne(text));
  console.log("part 2: ", partTwo(text));
}

void main();
