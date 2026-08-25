import { IPeopleRepository } from "../../domain/repositories/IPeopleRepository";
import { getSqlPool, sql } from "../database/sql/SqlConnectionPool";

export class SqlPeopleRepository implements IPeopleRepository {
  async getDataPeople(spname: string): Promise<any[]> {
    const pool = await getSqlPool();
    const result = await pool.request().execute(spname);
    return result.recordset;
  }

  async getDataEmployees(jsonData: string, storeProcedure: string): Promise<any[]> {
    const pool = await getSqlPool();
    const result = await pool
      .request()
      .input("jsonData", sql.Char, jsonData)
      .execute(storeProcedure);
    return result.recordset;
  }

  async getDataSupplier(cedruc: string, spname: string): Promise<any[]> {
    const pool = await getSqlPool();
    const result = await pool
      .request()
      .input("cedruc", sql.Char, cedruc)
      .execute(spname);
    return result.recordset;
  }

  async getDataParking(divitionCode: string, spname: string, centerCode: string): Promise<any[]> {
    const pool = await getSqlPool();
    const result = await pool
      .request()
      .input("divitionCode", sql.Char, divitionCode)
      .input("centerCode", sql.Char, centerCode)
      .execute(spname);
    return result.recordset;
  }
}
