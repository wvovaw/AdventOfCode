import Stack from "./lib/Stack.ts";

type MovesInstruction = [number, number, number];
type CratesStacks = string[][];

const getInstructionTokens = ([n, from, to]: MovesInstruction) => ({
  n: n,
  from: from - 1,
  to: to - 1,
});

function getTops<T>(stacks: Stack<T>[]): string {
  const tops = stacks.map((stack) => stack.peek()).join("");
  return tops;
}

export function partOne(
  crates: CratesStacks,
  rearranges: MovesInstruction[]
): string {
  const stacks = crates.map((st) => new Stack(st));

  rearranges.forEach((op) => {
    const { n, from, to } = getInstructionTokens(op);

    [...Array(n)].forEach(() => {
      const crate = stacks[from].pop();
      crate && stacks[to].push(crate);
    });
  });

  return getTops(stacks);
}

export function partTwo(
  crates: CratesStacks,
  rearranges: MovesInstruction[]
): string {
  const stacks = crates.map((st) => new Stack(st));

  rearranges.forEach((op) => {
    const { n, from, to } = getInstructionTokens(op);

    const buf: string[] = [...Array(n)]
      .map(() => stacks[from].pop())
      .filter((el): el is string => el !== "null")
      .reverse();

    stacks[to].push(buf);
  });

  return getTops(stacks);
}
