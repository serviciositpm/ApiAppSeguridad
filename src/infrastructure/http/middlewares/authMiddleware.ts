import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../../shared/utils/httpResponse";
import { CodesHttpEnum } from "../../../shared/enums/codesHttpsEnums";
import { JwtTokenService } from "../../security/JwtTokenService";

const tokenService = new JwtTokenService();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return HttpResponse.fail(res, CodesHttpEnum.forbidden, null, "Debe enviar un token");
    }
    if (Array.isArray(token)) {
      return HttpResponse.fail(res, CodesHttpEnum.forbidden, null, "Formato de token inválido");
    }
    const tokenValue = token.split(" ")[1];
    tokenService.verify(tokenValue);
    next();
  } catch (error) {
    console.error("Error validando token:", error);
    HttpResponse.fail(res, CodesHttpEnum.unauthorized, null, "Token inválido o expirado");
  }
};
