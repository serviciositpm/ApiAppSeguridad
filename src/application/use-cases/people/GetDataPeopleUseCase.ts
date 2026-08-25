import { IPeopleRepository } from "../../../domain/repositories/IPeopleRepository";

export class GetDataPeopleUseCase {
  constructor(private readonly peopleRepository: IPeopleRepository) {}

  execute(spname: string) {
    return this.peopleRepository.getDataPeople(spname);
  }
}
