import type { Service } from "#types/service";

import type UsersRepository from "../../repository";
import type UsersDTO from "./dto";

export default function UsersGetService(repository: UsersRepository): Service<typeof UsersDTO> {
  return (data) => {
    return {
      users: repository.allUsers(),
    };
  };
}
