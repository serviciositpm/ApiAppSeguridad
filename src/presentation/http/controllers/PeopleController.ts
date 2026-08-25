import { Request, Response } from "express";
import { GetDataPeopleUseCase } from "../../../application/use-cases/people/GetDataPeopleUseCase";
import { GetDataPeopleSecurityUseCase } from "../../../application/use-cases/people/GetDataPeopleSecurityUseCase";
import { GetDataEmployeesUseCase } from "../../../application/use-cases/people/GetDataEmployeesUseCase";
import { GetDataSupplierUseCase } from "../../../application/use-cases/people/GetDataSupplierUseCase";
import { GetDataParkingUseCase } from "../../../application/use-cases/people/GetDataParkingUseCase";
import { HttpResponse } from "../../../shared/utils/httpResponse";
import { CodesHttpEnum } from "../../../shared/enums/codesHttpsEnums";

export class PeopleController {
  constructor(
    private readonly getDataPeopleUseCase: GetDataPeopleUseCase,
    private readonly getDataPeopleSecurityUseCase: GetDataPeopleSecurityUseCase,
    private readonly getDataEmployeesUseCase: GetDataEmployeesUseCase,
    private readonly getDataSupplierUseCase: GetDataSupplierUseCase,
    private readonly getDataParkingUseCase: GetDataParkingUseCase
  ) {}

  getDataPeople = async (_req: Request, res: Response) => {
    const data = await this.getDataPeopleUseCase.execute("Sp_App_Seg_Personas");
    res.status(CodesHttpEnum.ok).json(data);
  };

  getDataPeopleSecurity = async (_req: Request, res: Response) => {
    const data = await this.getDataPeopleSecurityUseCase.execute();
    res.status(CodesHttpEnum.ok).json(data);
  };

  getDataEmployees = async (req: Request, res: Response) => {
    const data = await this.getDataEmployeesUseCase.execute(req.body);
    res.status(CodesHttpEnum.ok).json(data);
  };

  getDataSupplier = async (req: Request, res: Response) => {
    const cedruc = req.query.cedruc as string;
    const data = await this.getDataSupplierUseCase.execute(cedruc);
    res.status(CodesHttpEnum.ok).json(
      HttpResponse.response(CodesHttpEnum.ok, data, "Data Supplier")
    );
  };

  getDataParking = async (req: Request, res: Response) => {
    const divitionCode = req.query.divitionCode as string;
    const centerCode = req.query.centerCode as string;
    const data = await this.getDataParkingUseCase.execute(divitionCode, centerCode);
    res.status(CodesHttpEnum.ok).json(
      HttpResponse.response(CodesHttpEnum.ok, data, "Data Parking")
    );
  };
}
