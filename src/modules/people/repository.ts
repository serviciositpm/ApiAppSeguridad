import sql from "mssql";
import dbConfig from "../../config/dbConfig";

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
}
