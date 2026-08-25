import { IPeopleRepository } from "../../../domain/repositories/IPeopleRepository";

export class GetDataEmployeesUseCase {
  constructor(private readonly peopleRepository: IPeopleRepository) {}

  execute(body: unknown) {
    const jsonData = JSON.stringify(body);
    return this.peopleRepository.getDataEmployees(jsonData, "Sp_App_Seg_Personas");
  }
}
