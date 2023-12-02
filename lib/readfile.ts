import { dirname, fromFileUrl, resolve } from "path";

export default function (from: string, filename: string) {
  const filePath = resolve(dirname(fromFileUrl(from)), filename);
  const text = Deno.readTextFileSync(filePath);
  return text;
}
