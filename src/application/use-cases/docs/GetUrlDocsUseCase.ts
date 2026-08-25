import { IDocsRepository } from "../../../domain/repositories/IDocsRepository";

export class GetUrlDocsUseCase {
  constructor(private readonly docsRepository: IDocsRepository) {}

  execute(opcion: string, nrodoc: string) {
    return this.docsRepository.getUrlDocs(opcion, nrodoc);
  }
}
