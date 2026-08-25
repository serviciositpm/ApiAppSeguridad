import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { AuthenticatedUser, Credentials } from "../../domain/entities/Auth";
import { getSqlPool, sql } from "../database/sql/SqlConnectionPool";

export class SqlAuthRepository implements IAuthRepository {
  async validateUser({ username, password }: Credentials): Promise<AuthenticatedUser> {
    const pool = await getSqlPool();
    const result = await pool
      .request()
      .input("username", sql.Char, username)
      .input("password", sql.Char, password)
      .execute("Sp_App_Seg_Valida_Usuarios");
    return result.recordset[0];
  }
}
