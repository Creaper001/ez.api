import { readdirSync } from "fs";
import { resolve } from "path";

export function getDirectories(...paths: string[]): string[] {
  const path = resolve(...paths);
  const dirents = readdirSync(path, { withFileTypes: true });

  const directories: string[] = [];

  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      directories.push(dirent.name);
    }
  }

  return directories;
}
