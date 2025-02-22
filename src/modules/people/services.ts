import { CodesHttpEnum } from '../../enums/codesHttpsEnums';
import { HttpResponse } from '../../utils/httpResponse';
import { PeopleRepository } from './repository';



export class PeopleServices {
    private peopleRepository: PeopleRepository;
    constructor() {
        this.peopleRepository = new PeopleRepository();
    }
    async getDataPeople(spname: string) {
        try {
            const dataPeople = await this.peopleRepository.getDataPeople(spname);
            return HttpResponse.response(
                CodesHttpEnum.ok,
                dataPeople,
                'Data People'
            );
            
        } catch (error) {
            throw error;       
        }
    }
}
