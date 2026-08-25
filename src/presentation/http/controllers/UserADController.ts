import { Request, Response } from "express";
import { GetADUserUseCase } from "../../../application/use-cases/user-ad/GetADUserUseCase";
import { HttpResponse } from "../../../shared/utils/httpResponse";
import { CodesHttpEnum } from "../../../shared/enums/codesHttpsEnums";

export class UserADController {
  constructor(private readonly getADUserUseCase: GetADUserUseCase) {}

  getUser = async (req: Request, res: Response) => {
    const { username } = req.body;
    if (!username) {
      return res.status(CodesHttpEnum.badRequest).json({ message: "Username is required in the request body" });
    }
    const entries = await this.getADUserUseCase.execute(username);
    res.status(CodesHttpEnum.ok).json(
      HttpResponse.response(CodesHttpEnum.ok, { searchEntries: entries }, "User exists in Active Directory")
    );
  };
}
