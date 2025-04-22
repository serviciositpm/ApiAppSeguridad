import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { HttpResponse } from "../../utils/httpResponse";

import { DocsRepository } from "./repository";

export class DocsServices {
  private docsRepository: DocsRepository;
  constructor() {
    this.docsRepository = new DocsRepository();
  }
  async getUrlDocs(opcion: string, nrodoc: string) {
    try {
      const dataDocs = await this.docsRepository.getUrlDocs(opcion, nrodoc);
      return HttpResponse.response(CodesHttpEnum.ok, dataDocs, "Data Docs");
    } catch (error) {
      console.error("Error en Consulta de Url en el services de Documentos:", error); // Registrar el error en la consola
      throw error;
      /* throw new Error("No se pudo obtener el usuario del Active Directory"); */
    }
  }
  async getTide(anio: number) {
    try {
      const dataTide = await this.docsRepository.getTide(anio);
      return HttpResponse.response(CodesHttpEnum.ok, dataTide, "Data Tide (Aguaje)");
    } catch (error) {
      console.error(
        "Error en Consulta de Url en el services de Documentos: Obtiene Tide (mareas Aguaje)",
        error
      ); // Registrar el error en la consola
      throw error;
    }
  }
}
