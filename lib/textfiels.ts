import { dirname, fromFileUrl, resolve } from "@std/path";

export function readfile(from: string, filename: string): string {
  const filePath = resolve(dirname(fromFileUrl(from)), filename);
  const text = Deno.readTextFileSync(filePath);
  return text;
}
