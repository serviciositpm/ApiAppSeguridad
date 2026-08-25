import { IPeopleRepository } from "../../../domain/repositories/IPeopleRepository";

export class GetDataParkingUseCase {
  constructor(private readonly peopleRepository: IPeopleRepository) {}

  execute(divitionCode: string, centerCode: string) {
    return this.peopleRepository.getDataParking(
      divitionCode,
      "Sp_App_Seg_Obtener_Parqueos",
      centerCode
    );
  }
}
