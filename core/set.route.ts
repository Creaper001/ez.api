import type { FastifyInstance } from "fastify";

import { join } from "path";

import { AppEntity } from "#app/entity";
import { getDirectories } from "#core/get.directories";

type RouteOptions = {
  path: string;
  fastify: FastifyInstance;
  route: string;
  Entity: AppEntity;
};

export async function setRoute({ path, fastify, route, Entity }: RouteOptions): Promise<void> {
  const directories = getDirectories(path);

  for (const directory of directories) {
    if (directory !== "get") {
      continue;
    }

    const directoryPath = join(path, directory);
    const { default: Service } = await import(join(directoryPath, "service"));
    const { default: Controller } = await import(join(directoryPath, "controller"));

    const service = Service(Entity);
    const controller = Controller(service);

    fastify[directory](route, controller);
  }
}
