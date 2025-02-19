import sql from 'mssql';
import dbConfig from '../../config/dbConfig';

export class DocsRepository {
    async getUrlDocs(opcion: string, nrodoc: string): Promise<any> {
        try {
            const pool = await sql.connect(dbConfig);
            const result = await pool.request()
                .input('opcion', sql.Char, opcion)
                .input('nrodoc', sql.Char, nrodoc)
                .execute('Sp_App_Seg_Devuelve_Url_Docs');
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    }
}