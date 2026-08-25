import jwt from "jsonwebtoken";
import { ITokenService } from "../../domain/services/ITokenService";
import { PUBLIC_KEY } from "../config/env";

export class JwtTokenService implements ITokenService {
  sign(payload: object): string {
    return jwt.sign(payload, PUBLIC_KEY, { expiresIn: 60 * 60 });
  }

  verify(token: string): any {
    return jwt.verify(token, PUBLIC_KEY);
  }
}
