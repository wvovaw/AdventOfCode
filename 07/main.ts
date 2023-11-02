import {partOne } from "./solution.ts";

function main() {
  const txt = Deno.readTextFileSync("input.txt");
  console.log(partOne(txt));
}

void main();
