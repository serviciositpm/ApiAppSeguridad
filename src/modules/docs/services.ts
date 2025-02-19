import { CodesHttpEnum } from '../../enums/codesHttpsEnums';
import { HttpResponse } from '../../utils/httpResponse';
import { DocsRepository } from './repository';

export class DocsServices {
   private docsRepository: DocsRepository;
   constructor() {
       this.docsRepository = new DocsRepository();
   }    
    async getUrlDocs(opcion: string, nrodoc: string) {
         try {
              const dataDocs = await this.docsRepository.getUrlDocs(opcion, nrodoc);
              return HttpResponse.response(
                CodesHttpEnum.ok,
                dataDocs,
                'Data Docs'
              );
              
         } catch (error) {
              throw error;       
         }
    }
}
