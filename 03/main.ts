import readfile from "../lib/readfile.ts";
import { partOne, partTwo } from "./solution.ts";

function main() {
  const text = readfile(import.meta.url, "input.txt");
  console.log(partOne(text));
  console.log(partTwo(text));
}

void main();
