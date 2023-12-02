export function partOne(text: string): number {
  const stack = text.split("\n");

  let x = 1, reg = 0;
  const strenghts : number[] = [];

  let cmd = stack.shift();
  for (let cycle = 1, c = 1; cycle <= 220; ++cycle) {
    x += reg;
    reg = 0;
    if (cmd?.startsWith("noop")) {
      cmd = stack.shift();
    }
    else if (cmd?.startsWith("addx")) {
      if (c === 2) {
        const v = Number(cmd.split(" ")[1]);
        reg = v;
        cmd = stack.shift();
        c = 1;
      }
      else c++;
    }
    else throw new Error("Unhandled command");

    if ([20, 60, 100, 140, 180, 220].includes(cycle)) {
      console.log("Cycle %d: x = %d", cycle, x);
      strenghts.push(x * cycle);
    }
  }

  return strenghts.reduce((acc,cur) => acc + cur, 0);
}
export function partTwo(text: string): number {
  return 0;
}