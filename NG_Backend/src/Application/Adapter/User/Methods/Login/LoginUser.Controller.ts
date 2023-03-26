import { Request, Response } from "express";

import { LoginUserService } from "./LoginUser.Service";

export class LoginUserController {
  constructor(private readonly loginUserService: LoginUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request.body;

    if (!user) {
      return response.status(400).json({
        statusCode: 400,
        message: "Required object user",
      });
    }

    const result = await this.loginUserService.execute(user);

    if (result.isLeft()) {
      return response.status(result.value._statusCode).json({
        statusCode: result.value._statusCode,
        message: result.value._message,
      });
    }

    return response.status(200).json(result.value);
  }
}
