import express from 'express';
import { UserADController } from './controller';

const router = express.Router();
const userADController = new UserADController();

// Cambia a POST para recibir el body
router.post('/user', userADController.getUser.bind(userADController));

export default router;