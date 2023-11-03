import { partOne, partTwo } from "./solution.ts";

function main() {
  const txt = Deno.readTextFileSync("input.txt");
  console.log(partOne(txt));
  console.log(partTwo(txt));
}

void main();
