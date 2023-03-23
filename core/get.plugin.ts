import type { FastifyPluginCallback } from "fastify";
import { join } from "path";

import { getImport } from "#core/get.import";
import { NewEntity } from "#core/types/new.entity";
import { NewRepository } from "#core/types/new.repository";
import { getRepository } from "#core/get.repository";
import { getDirectories } from "#core/get.directories";
import { toRoute } from "#core/to.route";
import { setRoute } from "#core/set.route";

type PluginOptions = {
  path: string;
};

export async function getPlugin({ path }: PluginOptions): Promise<FastifyPluginCallback> {
  const Entity = await getImport<NewEntity>(join(path, "entity"));
  const Repository = await getImport<NewRepository>(join(path, "repository"));
  const repository = getRepository(Repository, Entity);

  const directories = getDirectories(path);

  return async (fastify, _, done) => {
    for (const directory of directories) {
      const directoryPath = join(path, directory);
      const route = toRoute(directory);

      await setRoute({
        path: directoryPath,
        fastify: fastify,
        route: route,
        Repository: repository,
      });
    }

    done();
  };
}
