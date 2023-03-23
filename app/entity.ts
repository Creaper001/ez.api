import { PrimaryGeneratedColumn } from "typeorm";

export abstract class AppEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}
