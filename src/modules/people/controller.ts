import { Request } from "express";
import { PeopleServices } from "./services";

export const getDataPeopleController = async (req: Request) => {
  try {
    const spname: string = "Sp_App_Seg_Personas";
    return await new PeopleServices().getDataPeople(spname);
  } catch (error) {
    throw error;
  }
};
export const getDataPeopleControllerSecurity = async (req: Request) => {
  try {
    const spname: string = "Sp_App_Seg_Personas_Seguridad";
    return await new PeopleServices().getDataPeople(spname);
  } catch (error) {
    console.error("Error en Consulta de el controller de People:", error); // Registrar el error en la consola
    throw error;
  }
};
