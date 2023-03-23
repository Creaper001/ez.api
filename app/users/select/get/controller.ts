import type { RouteHandlerMethod } from "fastify";
import type { Service } from "#type/service";

import { DTO } from "./dto";

export default function UsersGetController(service: Service<typeof DTO>): RouteHandlerMethod {
  return (request, reply) => {
    const data = service({
      name: "Teste",
    });

    return data;
  };
}
