import type { Runtype } from "runtypes";
import type { RouteHandlerMethod } from "fastify";

import type { Service } from "#types/service";

export type NewController = (service: Service<Runtype>) => RouteHandlerMethod;
