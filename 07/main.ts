import readfile from "../lib/readfile.ts";
import { partOne, partTwo } from "./solution.ts";

function main() {
  const txt = readfile(import.meta.url, "input.txt");
  console.log(partOne(txt));
  console.log(partTwo(txt));
}

void main();
