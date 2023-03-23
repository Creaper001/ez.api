import { Entity, Column } from "typeorm";

import { AppEntity } from "#app/entity";

@Entity()
export default class UsersEntity extends AppEntity {
  @Column()
  name: string;
}
