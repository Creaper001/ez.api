import type { RouteHandlerMethod } from "fastify";

import type { Service } from "#types/service";
import UsersDTO from "./dto";

export default function UsersGetController(service: Service<typeof UsersDTO>): RouteHandlerMethod {
  return (request, reply) => {
    const data = service({
      name: "Henrique",
    });

    return data;
  };
}
