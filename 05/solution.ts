import Stack from "./lib/Stack.ts";

export function partOne(crates: string[][], rearranges: number[][]): string {
  const stacks = crates.map((st) => new Stack(st));

  rearranges.forEach((operation) => {
    const repeats = operation[0];
    const from = operation[1] - 1;
    const to = operation[2] - 1;

    [...Array(repeats)].forEach(() => {
      const crate = stacks[from].pop();
      crate && stacks[to].push(crate);
    });
  });

  const tops = stacks.map((stack) => stack.peek()).join("");

  return tops;
}
