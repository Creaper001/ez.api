import type { EntityTarget } from "typeorm";

import type { AppEntity } from "#app/entity";

export type NewEntity = EntityTarget<AppEntity>;
