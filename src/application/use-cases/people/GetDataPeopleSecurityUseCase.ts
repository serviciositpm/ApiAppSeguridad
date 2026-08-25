import { IPeopleRepository } from "../../../domain/repositories/IPeopleRepository";

export class GetDataPeopleSecurityUseCase {
  constructor(private readonly peopleRepository: IPeopleRepository) {}

  execute() {
    return this.peopleRepository.getDataPeople("Sp_App_Seg_Personas_Seguridad");
  }
}
