function findCode(str: string): number {
  let matches = str.match(/\d/g);

  if (matches) {
    const n1 = matches.at(0);
    const n2 = matches.at(-1);
    let res = n1;
    if (n2) res += n2;
    return Number(res);
  } else return 0;
}

export function partOne(text: string): number {
  const strs = text.split("\n");
  const codes = strs.map(findCode);
  return codes.reduce((acc, cur) => acc + cur, 0);
}

export function partTwo(text: string) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const getNum = (n: string) => (isNaN(Number(n)) ? words.indexOf(n) : +n);
  const rx = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;
  const strs = text.split("\n");
  const newStrs = strs.map((str) => {
    const matches = [...str.matchAll(rx)];
    const numbers = matches.map((m) => {
      return m[1];
    });

    return `${getNum(numbers[0])}${getNum(numbers.at(-1)!)}`;
  });
  const codes = newStrs.map(findCode);
  return codes.reduce((acc, cur) => acc + cur, 0);
}
