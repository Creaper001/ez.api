import { DataSource } from "typeorm";

import type { NewRepository } from "#core/types/new.repository";
import type { NewEntity } from "#core/types/new.entity";
import type { AppRepository } from "#app/repository";
import type { AppEntity } from "#app/entity";

export function getRepository(Repository: NewRepository, Entity: NewEntity): AppRepository<AppEntity> {
  const dataSource = new DataSource({ type: "mysql" });
  const orm = dataSource.getRepository(Entity);
  const repository = new Repository(orm);

  return repository;
}
