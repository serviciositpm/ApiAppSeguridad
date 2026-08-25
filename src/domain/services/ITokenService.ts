// Puerto para firma/verificación de tokens. La implementación (jsonwebtoken)
// vive en infrastructure/security/JwtTokenService.ts.
export interface ITokenService {
  sign(payload: object): string;
  verify(token: string): any;
}
