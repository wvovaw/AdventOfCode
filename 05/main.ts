import { partOne, partTwo } from "./solution.ts";
import { crates, rearranges } from "./inputs.ts";

function main() {
  console.log(partOne(crates, rearranges as [number, number, number][]));
  console.log(partTwo(crates, rearranges as [number, number, number][]));
}

void main();
