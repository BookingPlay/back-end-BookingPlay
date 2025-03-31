import Container, { Service } from "typedi";
import { Request, Response } from "express";
import { UserLogic } from "../logics/userLogic";

@Service()
export class UserController {
  private userLogic: UserLogic;

  constructor() {
    this.userLogic = Container.get(UserLogic);
  }

  public store = async (req: Request, res: Response) => {
    const { name, email, phone, password } = req.body;

    const response = await this.userLogic.createUser({
      name,
      email,
      phone,
      password,
    });

    res.status(200).json(response);
  };
}
