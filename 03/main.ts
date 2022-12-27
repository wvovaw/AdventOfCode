const text = new TextDecoder().decode(Deno.readFileSync("./input.txt"));

const getCharNumber = (char: string) => {
  if (char.charCodeAt(0) > 96) {
    return char.charCodeAt(0) - 96;
  } else return char.charCodeAt(0) - 38;
};

/** Part one */

const prioritize = (rucsac: string): number => {
  const l = rucsac.substring(0, rucsac.length / 2),
    r = rucsac.substring(rucsac.length / 2, rucsac.length);

  let counter = 0;
  l.split("").every((item) => {
    if (r.includes(item)) {
      counter += getCharNumber(item)
      return false;
    }
    return true;
  });
  return counter;
};

export const partOne = (text: string) => {
  const rucsacs = text.split("\n");
  return rucsacs.reduce((sum, rucsac) => sum + prioritize(rucsac), 0);
};

console.log(partOne(text));

/** Part two */

const prioritize2 = (group: Array<string>): number => {
  let counter = 0;
  group[0].split("").every((item) => {
    if (group[1].includes(item) && group[2].includes(item)) {
      counter += getCharNumber(item);
      return false;
    }
    return true;
  });
  return counter;
};

export const partTwo = (text: string) => {
  const rucsacs = text.split("\n");
  const groups: Array<Array<string>> = [];
  let group: Array<string> = [];

  rucsacs.forEach((rucsac) => {
    if (group.length === 3) {
      groups.push(group);
      group = [];
    }
    group.push(rucsac);
  });
  return groups.reduce((sum, group) => sum + prioritize2(group), 0);
};

console.log(partTwo(text));
