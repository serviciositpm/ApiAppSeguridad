export interface IPeopleRepository {
  getDataPeople(spname: string): Promise<any[]>;
  getDataEmployees(jsonData: string, storeProcedure: string): Promise<any[]>;
  getDataSupplier(cedruc: string, spname: string): Promise<any[]>;
  getDataParking(divitionCode: string, spname: string, centerCode: string): Promise<any[]>;
}
