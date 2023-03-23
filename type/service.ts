import type { Runtype, Static } from "runtypes";

export type Service<DTO extends Runtype> = (data: Static<DTO>) => Record<string, unknown>;
