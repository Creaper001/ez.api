import type { Runtype } from "runtypes";

import type { Service } from "#types/service";
import { AppRepository } from "#app/repository";

export type NewService = (repository: AppRepository) => Service<Runtype>;
