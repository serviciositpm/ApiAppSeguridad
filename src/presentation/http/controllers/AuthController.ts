import { Request, Response } from "express";
import { ValidateUserUseCase } from "../../../application/use-cases/auth/ValidateUserUseCase";
import { HttpResponse } from "../../../shared/utils/httpResponse";
import { CodesHttpEnum } from "../../../shared/enums/codesHttpsEnums";

export class AuthController {
  constructor(private readonly validateUserUseCase: ValidateUserUseCase) {}

  validateUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const result = await this.validateUserUseCase.execute({ username, password });
    res.status(CodesHttpEnum.ok).json(
      HttpResponse.response(CodesHttpEnum.ok, result, "Usuario Validado")
    );
  };
}
