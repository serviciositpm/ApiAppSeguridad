import sql from 'mssql';
import dbConfig from '../../config/dbConfig';

export class PeopleRepository {
    async getDataPeople(): Promise<any> {
        try {
            const pool = await sql.connect(dbConfig);
            const result = await pool.request()
                .execute('Sp_App_Seg_Personas');
            return result.recordset;
        } catch (error) {
            throw error;
        }
    }
}