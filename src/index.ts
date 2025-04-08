import express, { NextFunction, Request, Response } from "express";
import sql from 'mssql';
import config from './config/dbConfig';


// ? Rutas del proyecto
import authRoutes from "./modules/auth/routes";
import peopleRoutes from "./modules/people/routes";
import docsRoutes from "./modules/docs/routes";
import logsRoutes from "./modules/logs/routes";
import adRoutes from "./modules/user-ad/routes";

import { ValidationError } from "express-validation";
import { PORT } from "./environments/env";
import connectMongoDB from "./config/dbConfigMongo";
import { LogService } from "./modules/logs/services";
import { CodesHttpEnum } from "./enums/codesHttpsEnums";


const app = express();

// ? Configuracion de JSON para del proyecto 
app.use(express.json());
const logService = new LogService();
// ? Middleware para guardar logs de cada solicitud
app.use(async (req: Request, res: Response, next: NextFunction) => {
    const { method, url, headers, body } = req;
    
    // Registrar solicitud en MongoDB
    await logService.logInfo("Solicitud recibida", {
        method,
        url,
        headers: {
            userAgent: headers["user-agent"],
            authorization: headers["authorization"],
        },
        body,
    });

    next();
});

async function main() {
    try {
        // Conectar a MongoDB
        await connectMongoDB();

        // Conectar a Sql Server
        const pool = await sql.connect(config);
        console.log('✅ Conexión exitosa a la base de Datos SQL Server');
        await pool.close(); // Cerrar la conexión después de la prueba
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos Sql Server:', error);
    }
}
main();
const prefix: string = "/api-securityapp-v1";
// ? Deficion de rutas por modulos
app.use(`${prefix}/auth`, authRoutes) 
app.use(`${prefix}/people`, peopleRoutes) 
app.use(`${prefix}/docs`, docsRoutes) 
app.use(`${prefix}/logs`, logsRoutes) 
app.use(`${prefix}/advalidation`, adRoutes)

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
    return res.status(CodesHttpEnum.internalServerError).json(err)
 } as any)

const port: number = Number(PORT);
app.listen(port, () => {
    console.log('El servidor esta levantado en el puerto:', port);
});