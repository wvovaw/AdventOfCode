function isIsogram(str: string): boolean {
  return !/(\w).*\1/.test(str);
}

function detectIsogramSubstring(stream: string, length: number): number | null {
  for (
    let start = 0, end = start + length;
    end < stream.length;
    ++start, ++end
  ) {
    const subbuf = stream.substring(start, end);
    if (!isIsogram(subbuf)) continue;
    else return end;
  }
  return null;
}

export function partOne(stream: string): number | null {
  return detectIsogramSubstring(stream, 4);
}

export function partTwo(stream: string): number | null {
  return detectIsogramSubstring(stream, 14);
}
