import { Request, Response } from "express";
import { IPayLoadProps } from "../../../../Shared/Utils/IPayLoad";
import { SendTransactionService } from "./SendTransaction.Service";

export class SendTransactionController {
  constructor(
    private readonly sendTransactionSerivce: SendTransactionService
  ) {}

  async handle(request: Request, response: Response) {
    const { userName } = request.body.payload as IPayLoadProps;
    const { transaction } = request.body;

    //Validate body params in DTO entity

    if (!transaction) {
      return response.status(400).json({
        statusCode: 400,
        message:
          "parameters invalid, required transaction object with <tragetName>, <value> and <description> properties",
      });
    }

    const result = await this.sendTransactionSerivce.execute({
      ...transaction,
      userName,
    });

    if (result.isLeft()) {
      return response.status(400).json({
        statusCode: result.value._statusCode,
        message: result.value._message,
      });
    }

    return response.status(201).json(result.value);
  }
}
