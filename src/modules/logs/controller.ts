import { Request, Response } from 'express';
import { LogService } from './services';
import { HttpResponse } from '../../utils/httpResponse';
import { CodesHttpEnum } from '../../enums/codesHttpsEnums';


export class LogController {
    private logService: LogService;

    constructor() {
        this.logService = new LogService();
    }

    async fetchLogs(req: Request, res: Response): Promise<void> {
        try {
            const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 100;
            const logs = await this.logService.getRecentLogs(limit);
            res.status(CodesHttpEnum.ok).json(logs);
        } catch (error) {
            console.error('Error en fetchLogs en controller:', error);            
            res.status(CodesHttpEnum.internalServerError).json({ message: 'Error obteniendo logs' });
        }
    }

    async createLog(req: Request, res: Response): Promise<void> {
        try {
            const { level, message, meta } = req.body;
            if (!level || !message) {
                res.status(CodesHttpEnum.badRequest).json({ message: 'Faltan datos requeridos: level y message' });
                return;
            }
            await this.logService.logInfo(message, meta);
            res.status(CodesHttpEnum.created).json({ message: 'Log registrado correctamente' });
        } catch (error) {
            console.error('Error en createLog:', error);
            res.status(CodesHttpEnum.internalServerError).json({ message: 'Error registrando log' });
        }
    }
}
