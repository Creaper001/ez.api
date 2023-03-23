import { AppRepository } from "#app/repository";

import UsersEntity from "./entity";

export default class UsersRepository extends AppRepository<UsersEntity> {
  public allUsers() {
    return "allUsers";
  }

  public all() {
    return this.orm.findOne({
      where: {
        name: "teste",
      },
    });
  }
}
