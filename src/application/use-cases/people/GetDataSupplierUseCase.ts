import { IPeopleRepository } from "../../../domain/repositories/IPeopleRepository";

export class GetDataSupplierUseCase {
  constructor(private readonly peopleRepository: IPeopleRepository) {}

  execute(cedruc: string) {
    return this.peopleRepository.getDataSupplier(cedruc, "Sp_App_Seguridad_Proveedor");
  }
}
