import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { IPeople } from "../../interfaces/People.interface";
import { HttpResponse } from "../../utils/httpResponse";
import { PeopleRepository } from "./repository";

export class PeopleServices {
  private peopleRepository: PeopleRepository;
  constructor() {
    this.peopleRepository = new PeopleRepository();
  }
  async getDataPeople(spname: string) {
    try {
      const dataPeople = await this.peopleRepository.getDataPeople(spname);
      return HttpResponse.response(CodesHttpEnum.ok, dataPeople, "Data People");
    } catch (error) {
      console.error("Error en Consulta de el services de People:", error); // Registrar el error en la consola
      throw error;
    }
  }
  async getDataSupplier(cedruc: string, spname: string) {
    try {
      const dataSupplier = await this.peopleRepository.getDataSupplier(
        cedruc,
        spname
      );
      return HttpResponse.response(
        CodesHttpEnum.ok,
        dataSupplier,
        "Data Supplier"
      );
    } catch (error) {
      console.error(
        "Error en Consulta de el services de People obteneindo Proveedor:",
        error
      ); // Registrar el error en la consola
      throw error;
    }
  }

  async getDataEmployees(jsondata: string, storeprocedure: string) {
    try {
      const dataEmployees = await this.peopleRepository.getDataEmployees(
        jsondata,
        storeprocedure
      );
      return HttpResponse.response(
        CodesHttpEnum.ok,
        dataEmployees,
        "Data Employees"
      );
    } catch (error) {
      console.error(
        "Error en Consulta de Url en el Services de Peoples:",
        error
      ); // Registrar el error en la consola
      throw error;
    }
  }
}
