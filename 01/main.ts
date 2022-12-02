const bytes = Deno.readFileSync("./input.txt");
const text = new TextDecoder().decode(bytes);

const maxCalories = text
  .split(/\n{2,}/g)
  .map((backpack) => backpack.split("\n"))
  .map((backpack) =>
    backpack.reduce((acc: number, cur: string) => Number(acc) + Number(cur), 0)
  )
  .sort()
  .at(-1);

console.log(maxCalories);
