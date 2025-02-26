import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { PUBLIC_KEY } from "../../environments/env";
import { HttpResponse } from "../../utils/httpResponse";
import { AuthRepository } from "./repository";
import * as jwt from "jsonwebtoken";

export class AuthServices {
  private authRepository: AuthRepository;
  constructor() {
    this.authRepository = new AuthRepository();
  }
  async validateUser(username: string, password: string) {
    try {
      const existUserFromDb = await this.authRepository.validateUser(
        username,
        password
      );
      const codeError = existUserFromDb.codmsg;
      if (codeError === 300) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          existUserFromDb.descmsg
        );
      }
      const token = jwt.sign({ username: username }, PUBLIC_KEY, {
        expiresIn: 60 * 60,
      });
      return HttpResponse.response(
        CodesHttpEnum.ok,
        { token },
        "Usuario Validado"
      );
    } catch (error) {
      console.error("Error en Consulta de el services de Auth:", error); // Registrar el error en la consola
      throw error;
    }
  }
}
