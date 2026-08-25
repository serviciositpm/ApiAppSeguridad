import { IDocsRepository } from "../../../domain/repositories/IDocsRepository";
import { ValidationDomainError } from "../../../domain/errors/AppError";

// Mapa de opción -> stored procedure. Vivía como un if suelto en el controller;
// aquí es una regla de negocio explícita y fácil de extender.
const OPTION_TO_QUERY: Record<string, string> = {
  PES: "Sp_App_Seg_Obtener_Datos_Pesca",
};

export class GetDataDocsUseCase {
  constructor(private readonly docsRepository: IDocsRepository) {}

  execute(opcion: string, nrodoc: string) {
    const query = OPTION_TO_QUERY[opcion];
    if (!query) {
      throw new ValidationDomainError(`Opción '${opcion}' no soportada`);
    }
    return this.docsRepository.getDataDocs(opcion, nrodoc, query);
  }
}
