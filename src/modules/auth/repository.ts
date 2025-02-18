import sql from 'mssql';
import dbConfig from '../../config/dbConfig';

export class AuthRepository {
    async validateUser(username: string, password: string): Promise<any> {
        try {
            const pool = await sql.connect(dbConfig);
            const result = await pool.request()
                .input('username', sql.Char, username)
                .input('password', sql.Char, password)
                .execute('Sp_App_Seg_Valida_Usuarios');
            return result.recordset[0];
        } catch (error) {
            throw error;
        }
    }
}