type Color = "red" | "green" | "blue";

export function partOne(text: string): number {
  const CubesLimits: Record<Color, number> = {
    "red": 12,
    "green": 13,
    "blue": 14,
  };

  // Split games removing prefix
  const games = text.split("\n").map((line) => {
    const splitIx = line.indexOf(":") + 2;
    return line.substring(splitIx);
  });

  const impossibleGames = new Set();
  games.forEach((game, ix) => {
    const turnes = game.split(";");

    turnes.forEach((turn) => {
      const cubes = turn.split(",").map((cube) => cube.trim());

      cubes.forEach((cube) => {
        const inp = cube.split(" ");
        const color: Color = inp[1] as Color;
        const count = Number(inp[0]);
        if (CubesLimits[color] < count) impossibleGames.add(ix);
      });
    });

    const isImpossible = impossibleGames.has(ix) ? "impossible" : "possible";
    console.log("Game %d is %s", ix + 1, isImpossible);
  });

  const possibleSum = [...Array(games.length).keys()].filter((_, i) => {
    return !impossibleGames.has(i)
  }).reduce((acc, cur) => acc + (cur + 1), 0);
  return possibleSum;
}

export function partTwo(text: string) {
  return 0;
}
