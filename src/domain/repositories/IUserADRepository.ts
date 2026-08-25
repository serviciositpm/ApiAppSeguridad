import { ADUser } from "../entities/ADUser";

export interface IUserADRepository {
  findUser(username: string): Promise<ADUser[]>;
}
