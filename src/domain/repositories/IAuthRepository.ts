import { AuthenticatedUser, Credentials } from "../entities/Auth";

// Puerto de dominio: la capa de aplicación depende de esta interfaz,
// nunca de mssql directamente. La implementación concreta vive en infrastructure/.
export interface IAuthRepository {
  validateUser(credentials: Credentials): Promise<AuthenticatedUser>;
}
