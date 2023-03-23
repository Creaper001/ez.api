import type { FastifyPluginCallback } from "fastify";

import { join, resolve } from "path";

import { getDirectories } from "#core/get.directories";
import { toRoute } from "#core/to.route";
import { getPlugin } from "#core/get.plugin";

export function getApp(...paths: string[]): FastifyPluginCallback {
  const path = resolve(...paths);
  const directories = getDirectories(...paths);

  return async (fastify, _, done) => {
    for (const directory of directories) {
      const directoryPath = join(path, directory);
      const plugin = await getPlugin({ path: directoryPath });

      fastify.register(plugin, { prefix: toRoute(directory) });
    }

    done();
  };
}
