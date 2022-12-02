const bytes = Deno.readFileSync("./input.txt");
const text = new TextDecoder().decode(bytes);

const partOne = () => {
  /*
    Answer: 15632
  */
  let totalScore = 0;
  const increments = [
    [4, 1, 7],
    [8, 5, 2],
    [3, 9, 6],
  ];
  text
    .split("\n")
    .map((game) =>
      game
        .replace(/[A,X]/g, "1")
        .replace(/[B,Y]/g, "2")
        .replace(/[C,Z]/g, "3")
        .split(" ")
        .map((move) => Number(move))
    )
    .map((game) => {
      const [e1, e2] = game;
      const i = e2 - 1,
        j = e1 - 1;
      totalScore += increments[i][j];
    });
  console.log(totalScore);
};

const partTwo = () => {
  /*
    Answer: 14416
  */
  let totalScore = 0;
  enum s {
    A = 1,
    B = 2,
    C = 3,
  }
  type skey = keyof typeof s;
  enum o {
    X = 0,
    Y = 3,
    Z = 6,
  }
  type okey = keyof typeof o;
  const increments = [
    // A          B          C
    [s.C + o.X, s.A + o.X, s.B + o.X], // X  loose
    [s.A + o.Y, s.B + o.Y, s.C + o.Y], // Y  draw
    [s.B + o.Z, s.C + o.Z, s.A + o.Z], // Z  win
  ];

  text.split("\n").map((game) => {
    const [e1, e2] = game.split(" ");
    const i = o[e2 as okey] / 3;
    const j = s[e1 as skey] - 1;

    totalScore += increments[i][j];
  });
  console.log(totalScore);
};

partOne();
// partTwo();
