import { UserADRepository } from './repository';

export class UserADService {
    private repository: UserADRepository;

    constructor() {
        this.repository = new UserADRepository();
    }

    public async getUser(username: string): Promise<any> {
        try {
            return await this.repository.findUser(username);
            
        } catch (error) {
            console.error('❌Error en getUser Services:', error);
            throw new Error(`❌ Error fetching user from AD in Services: ${error}`);
        }
    }
}