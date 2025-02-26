import { Router } from 'express';
import { LogController } from './controller';

const router = Router();
const logController = new LogController();

router.get('/logs', (req, res) => logController.fetchLogs(req, res));
router.post('/logs', (req, res) => logController.createLog(req, res));

export default router;
