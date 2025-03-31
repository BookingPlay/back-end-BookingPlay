import { EntityRepository, Repository, getRepository } from "typeorm";
import { User } from "../../database/entities/user";
import { Service } from "typedi";
import { userRepositoryInterface } from "./interfaces/userRepositoryInterface";
import { DatabaseError } from "../../../config/exceptions";

@Service()
@EntityRepository(User)
export class UserRepository implements userRepositoryInterface {
  private readonly repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async store(data: User): Promise<User> {
    try {
      return await this.repository.save(data);
    } catch (error) {
      console.log(error);
      throw new DatabaseError("Cannot store User");
    }
  }
}
