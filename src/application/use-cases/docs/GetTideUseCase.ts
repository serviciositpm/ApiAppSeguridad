import { IDocsRepository } from "../../../domain/repositories/IDocsRepository";
import { ValidationDomainError } from "../../../domain/errors/AppError";

export class GetTideUseCase {
  constructor(private readonly docsRepository: IDocsRepository) {}

  execute(anio: number) {
    if (Number.isNaN(anio)) {
      throw new ValidationDomainError("El parámetro 'anio' debe ser numérico");
    }
    return this.docsRepository.getTide(anio);
  }
}
