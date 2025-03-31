import { User } from "../../../database/entities";

export interface userRepositoryInterface {
  store(data: Partial<User>): Promise<User>;
}
