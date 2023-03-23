import type { Repository } from "typeorm";

import type { AppEntity } from "#app/entity";

export abstract class AppRepository<Entity extends AppEntity> {
  constructor(protected orm: Repository<Entity>) {}
}
