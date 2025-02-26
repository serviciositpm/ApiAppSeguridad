import { Request } from "express";
import { IDocs } from "../../interfaces/Docs.interface";
import { DocsServices } from "./services";

export const getDocsController = async (req: Request) => {
  try {
    const { opcion, nrodoc } = req.body as IDocs;
    return await new DocsServices().getUrlDocs(opcion, nrodoc);
  } catch (error) {
    console.error(
      "Error en Consulta de Url en el controller de Documentos:",
      error
    ); // Registrar el error en la consola
    throw error;
  }
};
