import { IDocsRepository } from "../../domain/repositories/IDocsRepository";
import { getSqlPool, sql } from "../database/sql/SqlConnectionPool";

export class SqlDocsRepository implements IDocsRepository {
  async getUrlDocs(opcion: string, nrodoc: string): Promise<any> {
    const pool = await getSqlPool();
    const result = await pool
      .request()
      .input("opcion", sql.Char, opcion)
      .input("nrodoc", sql.Char, nrodoc)
      .execute("Sp_App_Seg_Devuelve_Url_Docs");
    return result.recordset[0];
  }

  async getTide(anio: number): Promise<any[]> {
    const pool = await getSqlPool();
    const result = await pool
      .request()
      .input("anio", sql.Int, anio)
      .execute("Sp_App_Seg_Datos_Aguaje");
    return result.recordset;
  }

  async getContainer(): Promise<any[]> {
    const pool = await getSqlPool();
    const result = await pool.request().execute("Sp_App_Seguridad_Contenedores");
    return result.recordset;
  }

  async getDataDocs(opcion: string, nrodoc: string, query: string): Promise<any> {
    const pool = await getSqlPool();
    const result = await pool
      .request()
      .input("opcion", sql.Char, opcion)
      .input("nrodoc", sql.Char, nrodoc)
      .execute(query);
    return JSON.parse(result.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]);
  }
}
