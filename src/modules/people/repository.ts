import sql from "mssql";
import dbConfig from "../../config/dbConfig";
import { IPeople } from "../../interfaces/People.interface";

export class PeopleRepository {
  async getDataPeople(spname: string): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool.request().execute(spname);
      return result.recordset;
    } catch (error) {
      console.error("Error en Consulta de el repository de People:", error); // Registrar el error en la consola
      throw error;
    }
  }

  async getDataEmployees(jsondata: string,storeprocedure : string): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool
        .request()
        .input("jsonData", sql.Char, jsondata)
        .execute(storeprocedure);
      return result.recordset;
    } catch (error) {
      console.error(
        "Error en Consulta de Url en el Repository de Peoples:",
        error
      ); // Registrar el error en la consola
      throw error;
    }
  }
}
