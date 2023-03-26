import { Request, Response } from "express";
import { IPayLoadProps } from "../../../../Shared/Utils/IPayLoad";
import { RecoverInformationService } from "./RecoverInformation.Service";

export class RecoverInformationController {
  constructor(
    private readonly recoverINformatioService: RecoverInformationService
  ) {}

  async handle(request: Request, response: Response) {
    const { userName } = request.body.payload as IPayLoadProps;

    if (!userName) {
      return response.status(404).json({
        statusCode: 404,
        message: "user not found",
      });
    }

    const result = await this.recoverINformatioService.execute(userName);

    if (result.isLeft()) {
      return response.status(result.value.statusCode).json({
        statusCode: result.value.statusCode,
        message: result.value.message,
      });
    }

    return response.status(200).json(result.value);
  }
}
