export interface IDocsRepository {
  getUrlDocs(opcion: string, nrodoc: string): Promise<any>;
  getTide(anio: number): Promise<any[]>;
  getContainer(): Promise<any[]>;
  getDataDocs(opcion: string, nrodoc: string, query: string): Promise<any>;
}
