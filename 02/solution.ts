type Color = "red" | "green" | "blue";

function getGames(input: string) {
  return input.split("\n").map((line) => {
    const splitIx = line.indexOf(":") + 2;
    return line.substring(splitIx);
  });
}

export function partOne(text: string): number {
  const CubesLimits: Record<Color, number> = {
    "red": 12,
    "green": 13,
    "blue": 14,
  };
  const games = getGames(text);

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
  });

  const possibleSum = [...Array(games.length).keys()].filter((_, i) => {
    return !impossibleGames.has(i);
  }).reduce((acc, cur) => acc + (cur + 1), 0);
  return possibleSum;
}

export function partTwo(text: string) {
  const games = getGames(text);

  let sum = 0;
  games.forEach((game, _) => {
    const turnes = game.split(";");

    const gm: Record<Color, number> = {
      red: 0,
      green: 0,
      blue: 0,
    };

    turnes.forEach((turn) => {
      const cubes = turn.split(",").map((cube) => cube.trim());

      cubes.forEach((cube) => {
        const inp = cube.split(" ");
        const color: Color = inp[1] as Color;
        const count = Number(inp[0]);

        if (gm[color] < count) {
          gm[color] = count;
        }
      });
    });

    sum += gm.red * gm.green * gm.blue;
  });

  return sum;
}
