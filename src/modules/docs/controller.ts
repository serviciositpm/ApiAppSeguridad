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
export const getTideController = async (req: Request) => {
  try {
    const anio: number = parseInt(req.query.anio as string, 10);
    if (isNaN(anio)) {
      throw new Error("Invalid 'anio' query parameter debe ser numero.");
    }
    return await new DocsServices().getTide(anio);
  } catch (error) {
    console.error(
      "Error en Consulta de Url en el controller de Documentos: Obtiene Tide (mareas Aguaje)",
      error
    ); // Registrar el error en la consola
    throw error;
  }
};
export const getContainerController = async (req: Request) => {
  try {
    return await new DocsServices().getContainer();
  } catch (error) {
    console.error(
      "Error en Consulta de Url en el controller de Documentos: Obtiene Contenedor",
      error
    ); // Registrar el error en la consola
    throw error;
  }
};
export const getDataDocsController = async (req: Request) => {
  try {
    const { opcion, nrodoc } = req.body as IDocs;
    let query: string = "";
    if (opcion == "PES"){
      query  = "Sp_App_Seg_Obtener_Datos_Pesca" ;
    }    
    if (!query) {
      throw new Error("El parámetro 'query' es obligatorio.");
    }
    return await new DocsServices().getDataDocs(opcion, nrodoc, query);
  } catch (error) {
    console.error(
      "Error en Consulta  en el controller de Documentos:",
      error
    ); // Registrar el error en la consola
    throw error;
  }
};
