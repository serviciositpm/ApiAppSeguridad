import { IAuthRepository } from "../../../domain/repositories/IAuthRepository";
import { ITokenService } from "../../../domain/services/ITokenService";
import { Credentials } from "../../../domain/entities/Auth";
import { UnauthorizedError } from "../../../domain/errors/AppError";

// Caso de uso: no sabe nada de Express, mssql ni JWT concretos.
// Solo orquesta el puerto de repositorio y el puerto de token.
export class ValidateUserUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly tokenService: ITokenService
  ) {}

  async execute(credentials: Credentials) {
    const user = await this.authRepository.validateUser(credentials);
  
    if (!user || user.codmsg === 300) {
      throw new UnauthorizedError(user?.descmsg ?? "Credenciales inválidas");
    }

    const token = this.tokenService.sign({ username: user.username });
    return { username: user.username, token };
  }
}
