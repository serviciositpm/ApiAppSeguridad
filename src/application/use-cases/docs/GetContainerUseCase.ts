import { IDocsRepository } from "../../../domain/repositories/IDocsRepository";

export class GetContainerUseCase {
  constructor(private readonly docsRepository: IDocsRepository) {}

  execute() {
    return this.docsRepository.getContainer();
  }
}
