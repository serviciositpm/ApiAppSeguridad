import { IUserADRepository } from "../../../domain/repositories/IUserADRepository";
import { NotFoundError } from "../../../domain/errors/AppError";

export class GetADUserUseCase {
  constructor(private readonly userADRepository: IUserADRepository) {}

  async execute(username: string) {
    const entries = await this.userADRepository.findUser(username);
    if (!entries || entries.length === 0) {
      throw new NotFoundError("Usuario no encontrado en Active Directory");
    }
    return entries;
  }
}
