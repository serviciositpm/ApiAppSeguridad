import { Request, Response } from 'express';
import { UserADService } from './service';
import { CodesHttpEnum } from '../../enums/codesHttpsEnums';

export class UserADController {
    private service: UserADService;

    constructor() {
        this.service = new UserADService();
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        const { username } = req.body; // Lee el username desde el body

        if (!username) {
            res.status(CodesHttpEnum.badRequest).json({ message: 'Username is required in the request body' });
            return;
        }
        try {
            const user = await this.service.getUser(username);
            res.json(user);
        } catch (error) {
            console.error('❌ Error en getUser en controller:', error);
            res.status(CodesHttpEnum.internalServerError).json({ message: error });
        }
    }
}