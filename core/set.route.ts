import type { FastifyInstance } from "fastify";
import { join } from "path";

import type { AppEntity } from "#app/entity";
import type { AppRepository } from "#app/repository";
import type { NewService } from "#core/types/new.service";
import type { NewController } from "#core/types/new.controller";
import { getDirectories } from "#core/get.directories";
import { getImport } from "#core/get.import";

type RouteOptions = {
  path: string;
  fastify: FastifyInstance;
  route: string;
  Repository: AppRepository<AppEntity>;
};

export async function setRoute({ path, fastify, route, Repository }: RouteOptions): Promise<void> {
  const directories = getDirectories(path);

  for (const directory of directories) {
    if (directory !== "get" && directory !== "put" && directory !== "delete" && directory !== "patch") {
      continue;
    }

    const directoryPath = join(path, directory);
    const Service = await getImport<NewService>(join(directoryPath, "service"));
    const Controller = await getImport<NewController>(join(directoryPath, "controller"));

    const service = Service(Repository);
    const controller = Controller(service);

    fastify[directory](route, controller);
  }
}
