import type { Repository } from "typeorm";

import type { AppEntity } from "#app/entity";
import type { AppRepository } from "#app/repository";

export type NewRepository = new (orm: Repository<AppEntity>) => AppRepository;
