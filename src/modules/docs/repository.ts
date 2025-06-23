import sql from "mssql";
import dbConfig from "../../config/dbConfig";

export class DocsRepository {
  async getUrlDocs(opcion: string, nrodoc: string): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool
        .request()
        .input("opcion", sql.Char, opcion)
        .input("nrodoc", sql.Char, nrodoc)
        .execute("Sp_App_Seg_Devuelve_Url_Docs");
      return result.recordset[0];
    } catch (error) {
      console.error(
        "Error en Consulta de Url en el Repository de Documentos:",
        error
      ); // Registrar el error en la consola
      throw error;
    }
  }
  async getTide(anio: number): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool
        .request()
        .input("anio", sql.Int, anio)
        .execute("Sp_App_Seg_Datos_Aguaje");
      return result.recordset;
    } catch (error) {
      console.error(
        "Error en Consulta de Url en el Repository de Documentos: Obtiene Tide (mareao Aguaje)",
        error
      ); // Registrar el error en la consola
      throw error;
    }
  } 
  async getContainer(): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool
        .request()
        .execute("Sp_App_Seguridad_Contenedores");
      return result.recordset;
    } catch (error) {
      console.error(
        "Error en Consulta de Url en el Repository de Documentos: Obtiene Contenedor ",
        error
      ); // Registrar el error en la consola
      throw error;
    }
  } 
}
