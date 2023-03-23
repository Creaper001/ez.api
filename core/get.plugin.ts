import type { FastifyPluginCallback } from "fastify";

import { join } from "path";

import { getDirectories } from "#core/get.directories";
import { setRoute } from "#core/set.route";
import { toRoute } from "#core/to.route";

type PluginOptions = {
  path: string;
};

export async function getPlugin({ path }: PluginOptions): Promise<FastifyPluginCallback> {
  const { default: Entity } = await import(join(path, "entity"));
  const directories = getDirectories(path);

  return async (fastify, _, done) => {
    for (const directory of directories) {
      const directoryPath = join(path, directory);
      const route = toRoute(directory);

      await setRoute({
        path: directoryPath,
        fastify: fastify,
        route: route,
        Entity: Entity,
      });
    }

    done();
  };
}
