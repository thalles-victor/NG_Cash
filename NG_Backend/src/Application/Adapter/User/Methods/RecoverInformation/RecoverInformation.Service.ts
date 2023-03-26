import { IUserRepositoryContract } from "../../../../../Infra/core/IUserRepository.Contract";

import { Either, left, right } from "../../../../Shared/Utils/Errors/Either";
import { CustomErrorResponse } from "../../../../Shared/Utils/Errors/Error";
import { UserGlobalRepresentation } from "../User.GlobalRepresentation";

type RecoverUserInformationResponse = Either<
  CustomErrorResponse,
  {
    user: UserGlobalRepresentation;
  }
>;

export class RecoverInformationService {
  constructor(private readonly userRepository: IUserRepositoryContract) {}

  async execute(username: string): Promise<RecoverUserInformationResponse> {
    const user = await this.userRepository.getByUserName(username);

    if (!user) {
      return left(new CustomErrorResponse("user not found", 404));
    }

    return right({
      user: user,
    });
  }
}
