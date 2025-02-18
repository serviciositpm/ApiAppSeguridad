import express, { NextFunction, Request, Response } from "express";
import sql from 'mssql';
import config from './config/dbConfig';


// ? Rutas del proyecto
import authRoutes from "./modules/auth/routes";
import { ValidationError } from "express-validation";
import { PORT } from "./environments/env";

const app = express();

// ? Configuracion de JSON para del proyecto 
app.use(express.json());

async function main() {
    try {
        const pool = await sql.connect(config);
        console.log('✅ Conexión exitosa a la base de Datos');
        await pool.close(); // Cerrar la conexión después de la prueba
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error);
    }
}
main();
const prefix: string = "/api-securityapp-v1";
// ? Deficion de rutas por modulos
app.use(`${prefix}/auth`, authRoutes)
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
 } as any)

const port: number = Number(PORT);
app.listen(port, () => {
    console.log('El servidor esta levantado en el puerto:', port);
});