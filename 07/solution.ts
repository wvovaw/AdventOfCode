class Dir {
  name: string;
  size = 0;
  parent: Dir | null;
  children: Dir[] = [];

  constructor(parent: Dir | null, name: string) {
    this.parent = parent;
    this.name = name;
  }
}

function recursiveCalculateSize(dir: Dir): number {
  if (dir.children.length === 0) {
    return dir.size;
  }
  return dir.children
    .map((d) => {
      if (d.children.length > 0) {
        const s = recursiveCalculateSize(d);
        d.size += s;
        return d.size;
      } else return d.size;
    })
    .reduce((acc, cur) => acc + cur, 0);
}

function findDirsLessThan100kSum(dir: Dir): number {
  if (dir.children.length === 0) {
    if (dir.size <= 100000) return dir.size;
    else return 0;
  }
  const sizes = dir.children.map((d) => findDirsLessThan100kSum(d));
  if (dir.size <= 100000) sizes.push(dir.size);
  return sizes.reduce((acc, cur) => acc + cur, 0);
}

function parseLine(line: string) {
  if (/^(\$ cd)/.test(line)) {
    return "cd";
  } else if (/^(dir)/.test(line)) {
    return "dir";
  } else if (/^\d/.test(line)) {
    return "file";
  } else if (/^(\$ ls)/.test(line)) {
    return "ls";
  }
}

export function partOne(text: string) {
  const hst = text.split("\n");
  const root: Dir = new Dir(null, "/");
  let cwd: Dir = root;

  for (const line of hst) {
    switch (parseLine(line)) {
      case "cd": {
        const dirName = line.split(" ")[2];
        if (dirName === "..") {
          if (cwd.parent) cwd = cwd.parent;
          else throw new Error(`Dir '${cwd.name}' has no parent dir`);
        } else {
          const dir = cwd.children.find((d) => d.name === dirName);
          if (dir) cwd = dir;
          else throw new Error(`Dir '${dirName}' not found in ${cwd.name}`);
        }
        break;
      }
      case "dir": {
        const dirName = line.split(" ")[1];
        if (cwd.children.findIndex((d) => d.name === dirName) === -1) {
          const newDir = new Dir(cwd, dirName);
          cwd.children.push(newDir);
        } else
          throw new Error(`Dir '${dirName}' already exists in '${cwd.name}'`);
        break;
      }
      case "file": {
        const [size, filename] = line.split(" ");
        cwd.size += parseInt(size);
        break;
      }
      case "ls": {
        console.log(`cwd: '${cwd.name}'`);
        break;
      }
      default:
        throw new Error("Unknown command");
    }
  }
  const a = recursiveCalculateSize(root);
  root.size += a;
  const res = findDirsLessThan100kSum(root);
  console.log(res);
}
